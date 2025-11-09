import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Label } from '../../ui/label';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Button } from '../../ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '../../ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { Checkbox } from '../../ui/checkbox';
import { Switch } from '../../ui/switch';
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group';
import { Plus, Upload, X, FileText, Link as LinkIcon, Edit, Globe, FileType, Database, ChevronDown, Phone, Search, Calendar, Clock } from 'lucide-react@0.487.0';
import { useLanguage } from '../../../contexts/LanguageContext';

interface KnowledgeBase {
  id: number;
  type: 'file' | 'url' | 'text' | 'library' | 'calls';
  name: string;
  content?: string;
}

interface Call {
  id: number;
  agentName: string;
  customerPhone: string;
  date: string;
  duration: string;
  status: 'completed' | 'missed' | 'voicemail';
}

interface CompanyInformationTabProps {
  initialData?: any;
}

// Predefined KB library items
const libraryKBItems = [
  { id: 1, name: 'Product Documentation', type: 'file' as const },
  { id: 2, name: 'FAQ Database', type: 'text' as const },
  { id: 3, name: 'Support Articles', type: 'url' as const },
  { id: 4, name: 'Company Policies', type: 'file' as const },
  { id: 5, name: 'Troubleshooting Guide', type: 'text' as const },
  { id: 6, name: 'API Documentation', type: 'url' as const },
];

// Mock call data
const mockCalls: Call[] = [
  { id: 1, agentName: 'Sales Agent', customerPhone: '+1 (555) 123-4567', date: '2025-10-22', duration: '5m 32s', status: 'completed' },
  { id: 2, agentName: 'Support Agent', customerPhone: '+1 (555) 234-5678', date: '2025-10-22', duration: '3m 15s', status: 'completed' },
  { id: 3, agentName: 'Sales Agent', customerPhone: '+1 (555) 345-6789', date: '2025-10-21', duration: '8m 42s', status: 'completed' },
  { id: 4, agentName: 'Customer Service', customerPhone: '+1 (555) 456-7890', date: '2025-10-21', duration: '2m 18s', status: 'missed' },
  { id: 5, agentName: 'Support Agent', customerPhone: '+1 (555) 567-8901', date: '2025-10-20', duration: '6m 05s', status: 'completed' },
  { id: 6, agentName: 'Sales Agent', customerPhone: '+1 (555) 678-9012', date: '2025-10-20', duration: '4m 28s', status: 'voicemail' },
  { id: 7, agentName: 'Customer Service', customerPhone: '+1 (555) 789-0123', date: '2025-10-19', duration: '7m 14s', status: 'completed' },
  { id: 8, agentName: 'Support Agent', customerPhone: '+1 (555) 890-1234', date: '2025-10-19', duration: '3m 52s', status: 'completed' },
  { id: 9, agentName: 'Sales Agent', customerPhone: '+1 (555) 901-2345', date: '2025-10-18', duration: '5m 09s', status: 'completed' },
  { id: 10, agentName: 'Customer Service', customerPhone: '+1 (555) 012-3456', date: '2025-10-18', duration: '4m 37s', status: 'completed' },
];

// Get unique agent names for filter
const uniqueAgentNames = Array.from(new Set(mockCalls.map(call => call.agentName)));

export default function CompanyInformationTab({ initialData }: CompanyInformationTabProps) {
  const { t } = useLanguage();
  const [knowledgeBases, setKnowledgeBases] = useState<KnowledgeBase[]>(initialData?.knowledgeBases || []);
  const [modalType, setModalType] = useState<'file' | 'url' | 'text' | 'library' | 'calls' | null>(null);
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  const [urlInput, setUrlInput] = useState('');
  const [textTitle, setTextTitle] = useState('');
  const [textContent, setTextContent] = useState('');
  const [selectedLibraryItems, setSelectedLibraryItems] = useState<number[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  // Calls modal state
  const [callsSearchInput, setCallsSearchInput] = useState('');
  const [selectedAgentFilter, setSelectedAgentFilter] = useState<string>('all');
  const [dateRangeStart, setDateRangeStart] = useState('');
  const [dateRangeEnd, setDateRangeEnd] = useState('');
  const [selectedCalls, setSelectedCalls] = useState<number[]>([]);

  // Working hours state
  const [workingHoursEnabled, setWorkingHoursEnabled] = useState(initialData?.workingHoursEnabled ?? false);
  const [workingHoursType, setWorkingHoursType] = useState<'account' | 'custom'>('custom');
  const [timezone, setTimezone] = useState('(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi');
  const [workingDays, setWorkingDays] = useState({
    sun: { enabled: true, from: '09:00', to: '17:00' },
    mon: { enabled: true, from: '09:00', to: '17:00' },
    tue: { enabled: true, from: '09:00', to: '17:00' },
    wed: { enabled: true, from: '09:00', to: '17:00' },
    thu: { enabled: true, from: '09:00', to: '17:00' },
    fri: { enabled: false, from: '', to: '' },
    sat: { enabled: false, from: '', to: '' },
  });

  const addKnowledgeBase = (type: 'file' | 'url' | 'text' | 'library', name: string, content?: string) => {
    const newKb: KnowledgeBase = {
      id: Date.now(),
      type,
      name,
      content,
    };
    setKnowledgeBases([...knowledgeBases, newKb]);
  };

  const removeKnowledgeBase = (id: number) => {
    setKnowledgeBases(knowledgeBases.filter(kb => kb.id !== id));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileToUpload(file);
    }
  };

  const handleFileSubmit = () => {
    if (fileToUpload) {
      addKnowledgeBase('file', fileToUpload.name);
      setFileToUpload(null);
      setModalType(null);
    }
  };

  const handleUrlSubmit = () => {
    if (urlInput) {
      addKnowledgeBase('url', urlInput);
      setUrlInput('');
      setModalType(null);
    }
  };

  const handleTextSubmit = () => {
    if (textTitle && textContent) {
      addKnowledgeBase('text', textTitle, textContent);
      setTextTitle('');
      setTextContent('');
      setModalType(null);
    }
  };

  const handleLibrarySubmit = () => {
    selectedLibraryItems.forEach(itemId => {
      const item = libraryKBItems.find(kb => kb.id === itemId);
      if (item) {
        addKnowledgeBase('library', item.name);
      }
    });
    setSelectedLibraryItems([]);
    setModalType(null);
  };

  const toggleLibraryItem = (itemId: number) => {
    setSelectedLibraryItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const toggleCallSelection = (callId: number) => {
    setSelectedCalls(prev =>
      prev.includes(callId)
        ? prev.filter(id => id !== callId)
        : [...prev, callId]
    );
  };

  const handleSelectAllCalls = () => {
    const filteredCalls = getFilteredCalls();
    const allFilteredIds = filteredCalls.map(call => call.id);
    
    // If all filtered calls are selected, deselect all
    if (filteredCalls.every(call => selectedCalls.includes(call.id))) {
      setSelectedCalls(selectedCalls.filter(id => !allFilteredIds.includes(id)));
    } else {
      // Otherwise, select all filtered calls
      const newSelected = [...selectedCalls];
      allFilteredIds.forEach(id => {
        if (!newSelected.includes(id)) {
          newSelected.push(id);
        }
      });
      setSelectedCalls(newSelected);
    }
  };

  const getFilteredCalls = () => {
    return mockCalls.filter(call => {
      // Search filter
      const matchesSearch = callsSearchInput === '' || 
        call.customerPhone.toLowerCase().includes(callsSearchInput.toLowerCase()) ||
        call.agentName.toLowerCase().includes(callsSearchInput.toLowerCase());
      
      // Agent filter
      const matchesAgent = selectedAgentFilter === 'all' || call.agentName === selectedAgentFilter;
      
      // Date range filter
      const callDate = new Date(call.date);
      const matchesStartDate = dateRangeStart === '' || callDate >= new Date(dateRangeStart);
      const matchesEndDate = dateRangeEnd === '' || callDate <= new Date(dateRangeEnd);
      
      return matchesSearch && matchesAgent && matchesStartDate && matchesEndDate;
    });
  };

  const handleCallsSubmit = () => {
    selectedCalls.forEach(callId => {
      const call = mockCalls.find(c => c.id === callId);
      if (call) {
        addKnowledgeBase('calls', `Call with ${call.customerPhone} - ${call.date}`);
      }
    });
    setSelectedCalls([]);
    setCallsSearchInput('');
    setSelectedAgentFilter('all');
    setDateRangeStart('');
    setDateRangeEnd('');
    setModalType(null);
  };

  const getKbIcon = (type: string) => {
    switch (type) {
      case 'file':
        return <FileText className="w-4 h-4" />;
      case 'url':
        return <Globe className="w-4 h-4" />;
      case 'text':
        return <FileType className="w-4 h-4" />;
      case 'library':
        return <Database className="w-4 h-4" />;
      case 'calls':
        return <Phone className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getKbTypeLabel = (type: string) => {
    switch (type) {
      case 'file':
        return 'File';
      case 'url':
        return 'URL';
      case 'text':
        return 'Text';
      case 'library':
        return 'Library';
      case 'calls':
        return 'Call Recording';
      default:
        return type;
    }
  };

  const toggleDay = (day: keyof typeof workingDays) => {
    setWorkingDays(prev => ({
      ...prev,
      [day]: { ...prev[day], enabled: !prev[day].enabled }
    }));
  };

  const updateDayTime = (day: keyof typeof workingDays, field: 'from' | 'to', value: string) => {
    setWorkingDays(prev => ({
      ...prev,
      [day]: { ...prev[day], [field]: value }
    }));
  };

  const copyToAll = () => {
    const sunSchedule = workingDays.sun;
    setWorkingDays({
      sun: sunSchedule,
      mon: { ...sunSchedule },
      tue: { ...sunSchedule },
      wed: { ...sunSchedule },
      thu: { ...sunSchedule },
      fri: { ...sunSchedule },
      sat: { ...sunSchedule },
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Company Details</CardTitle>
          <CardDescription>Provide basic information about your company</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Company Name</Label>
              <Input placeholder="Enter company name" />
            </div>

            <div className="space-y-2">
              <Label>Company Location</Label>
              <Input placeholder="e.g., San Francisco, CA" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Business Context</Label>
            <Textarea
              placeholder="Describe your business, products, services, and what customers should know..."
              rows={6}
            />
            <p className="text-xs text-muted-foreground">
              This helps the AI understand your business context and provide relevant responses
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Knowledge Base</CardTitle>
          <CardDescription>
            Provide the LLM with domain-specific information to help it answer questions more accurately.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Add Knowledge Base Button with Dropdown */}
          <div>
            <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
              <DropdownMenuTrigger className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                <Plus className="w-4 h-4" />
                Add Knowledge Base
                <ChevronDown className="w-4 h-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem 
                  onClick={() => {
                    setModalType('file');
                    setDropdownOpen(false);
                  }} 
                  className="gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Add Files
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => {
                    setModalType('text');
                    setDropdownOpen(false);
                  }} 
                  className="gap-2"
                >
                  <FileType className="w-4 h-4" />
                  Create Text
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => {
                    setModalType('library');
                    setDropdownOpen(false);
                  }} 
                  className="gap-2"
                >
                  <Database className="w-4 h-4" />
                  Select from KB library
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => {
                    setModalType('calls');
                    setDropdownOpen(false);
                  }} 
                  className="gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Add from Calls
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Knowledge Base List */}
          {knowledgeBases.length > 0 && (
            <div className="space-y-3">
              <Label>Added Knowledge Bases ({knowledgeBases.length})</Label>
              <div className="space-y-2">
                {knowledgeBases.map((kb) => (
                  <div
                    key={kb.id}
                    className="flex items-center justify-between p-3 border rounded-lg bg-secondary/50"
                  >
                    <div className="flex items-center gap-3">
                      {getKbIcon(kb.type)}
                      <div>
                        <p className="text-sm">{kb.name}</p>
                        <p className="text-xs text-muted-foreground">{getKbTypeLabel(kb.type)}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeKnowledgeBase(kb.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add Files Modal */}
          <Dialog open={modalType === 'file'} onOpenChange={(open) => !open && setModalType(null)}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Files</DialogTitle>
                <DialogDescription>
                  Upload documents to add to your knowledge base
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="file"
                    accept=".pdf,.json,.docx,.csv,.xlsx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="kb-file-modal"
                  />
                  <Button 
                    variant="outline" 
                    className="gap-2 w-full"
                    onClick={() => document.getElementById('kb-file-modal')?.click()}
                  >
                    <Upload className="w-4 h-4" />
                    Choose File to Upload
                  </Button>
                  {fileToUpload && (
                    <p className="text-sm text-muted-foreground">
                      Selected: {fileToUpload.name}
                    </p>
                  )}
                </div>
                <div className="rounded-lg bg-muted p-4 space-y-2">
                  <p className="text-sm">Supported formats:</p>
                  <p className="text-xs text-muted-foreground">PDF, JSON, DOCX, CSV, XLSX</p>
                  <p className="text-sm mt-3">Maximum file size:</p>
                  <p className="text-xs text-muted-foreground">10MB</p>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setModalType(null)}>
                  Cancel
                </Button>
                <Button onClick={handleFileSubmit} disabled={!fileToUpload}>
                  Add File
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Add URL Modal */}
          <Dialog open={modalType === 'url'} onOpenChange={(open) => !open && setModalType(null)}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add URL</DialogTitle>
                <DialogDescription>
                  Enter a website URL to add to your knowledge base
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Website URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    The AI will crawl and learn from the content on this website
                  </p>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setModalType(null)}>
                  Cancel
                </Button>
                <Button onClick={handleUrlSubmit} disabled={!urlInput}>
                  Add URL
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Create Text Modal */}
          <Dialog open={modalType === 'text'} onOpenChange={(open) => !open && setModalType(null)}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create Text Knowledge Base</DialogTitle>
                <DialogDescription>
                  Manually enter information to add to your knowledge base
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    placeholder="Enter knowledge base title"
                    value={textTitle}
                    onChange={(e) => setTextTitle(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Content</Label>
                  <Textarea
                    placeholder="Enter knowledge base content..."
                    rows={12}
                    value={textContent}
                    onChange={(e) => setTextContent(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setModalType(null)}>
                  Cancel
                </Button>
                <Button onClick={handleTextSubmit} disabled={!textTitle || !textContent}>
                  Create Text
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Select from KB Library Modal */}
          <Dialog open={modalType === 'library'} onOpenChange={(open) => !open && setModalType(null)}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Select from Knowledge Base Library</DialogTitle>
                <DialogDescription>
                  Choose predefined knowledge bases to add to your agent
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-2 max-h-[400px] overflow-y-auto">
                {libraryKBItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 border rounded-lg hover:bg-secondary/50 cursor-pointer"
                    onClick={() => toggleLibraryItem(item.id)}
                  >
                    <Checkbox
                      checked={selectedLibraryItems.includes(item.id)}
                      onCheckedChange={() => toggleLibraryItem(item.id)}
                    />
                    {getKbIcon(item.type)}
                    <div className="flex-1">
                      <p className="text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{getKbTypeLabel(item.type)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setModalType(null)}>
                  Cancel
                </Button>
                <Button onClick={handleLibrarySubmit} disabled={selectedLibraryItems.length === 0}>
                  Add Selected ({selectedLibraryItems.length})
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Add from Calls Modal */}
          <Dialog open={modalType === 'calls'} onOpenChange={(open) => !open && setModalType(null)}>
            <DialogContent className="max-w-[900px] w-full max-h-[85vh] flex flex-col">
              <DialogHeader>
                <DialogTitle>Add from Calls</DialogTitle>
                <DialogDescription>
                  Select call recordings to add to your knowledge base
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 overflow-y-auto flex-1 pr-2">
                {/* Search and Filters */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm text-gray-600">Search</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="Search by phone or agent..."
                        value={callsSearchInput}
                        onChange={(e) => setCallsSearchInput(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm text-gray-600">Agent Name</Label>
                    <Select
                      value={selectedAgentFilter}
                      onValueChange={setSelectedAgentFilter}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All agents" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All agents</SelectItem>
                        {uniqueAgentNames.map((agentName) => (
                          <SelectItem key={agentName} value={agentName}>
                            {agentName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm text-gray-600">Date Range</Label>
                    <div className="flex gap-2 items-center">
                      <Input
                        type="text"
                        placeholder="dd/mm/yyyy"
                        value={dateRangeStart}
                        onChange={(e) => setDateRangeStart(e.target.value)}
                        className="flex-1"
                      />
                      <span className="text-gray-400">-</span>
                      <Input
                        type="text"
                        placeholder="dd/mm/yyyy"
                        value={dateRangeEnd}
                        onChange={(e) => setDateRangeEnd(e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>

                {/* White Background Container for Table */}
                <div className="bg-white dark:bg-white border border-gray-200 rounded-lg p-5 space-y-4">
                  {/* Select All */}
                  {getFilteredCalls().length > 0 && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 border border-gray-200">
                      <Checkbox
                        checked={getFilteredCalls().length > 0 && getFilteredCalls().every(call => selectedCalls.includes(call.id))}
                        onCheckedChange={handleSelectAllCalls}
                      />
                      <Label className="cursor-pointer text-gray-700" onClick={handleSelectAllCalls}>
                        Select All ({getFilteredCalls().length} calls)
                      </Label>
                    </div>
                  )}

                  {/* Calls List with Header */}
                  <div className="space-y-3">
                    {/* Table Header */}
                    {getFilteredCalls().length > 0 && (
                      <div className="grid grid-cols-[auto_1fr_1.2fr_0.9fr_0.8fr_auto] gap-4 px-4 py-2 text-sm text-gray-500">
                        <div className="w-10"></div>
                        <div>Agent</div>
                        <div>Customer</div>
                        <div>Date</div>
                        <div>Duration</div>
                        <div className="w-24 text-center">Status</div>
                      </div>
                    )}
                    
                    {/* Calls List */}
                    <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                      {getFilteredCalls().length === 0 ? (
                        <p className="text-sm text-gray-500 text-center py-8">
                          No calls found matching your filters
                        </p>
                      ) : (
                        getFilteredCalls().map((call) => (
                          <div
                            key={call.id}
                            className="grid grid-cols-[auto_1fr_1.2fr_0.9fr_0.8fr_auto] gap-4 items-center px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors bg-white"
                            onClick={() => toggleCallSelection(call.id)}
                          >
                            <div className="flex items-center gap-2 w-10">
                              <Checkbox
                                checked={selectedCalls.includes(call.id)}
                                onCheckedChange={() => toggleCallSelection(call.id)}
                              />
                              <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                            </div>
                            <div className="text-sm text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">
                              {call.agentName}
                            </div>
                            <div className="text-sm text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">
                              {call.customerPhone}
                            </div>
                            <div className="text-sm text-gray-900 whitespace-nowrap">
                              {new Date(call.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}
                            </div>
                            <div className="text-sm text-gray-900 whitespace-nowrap">
                              {call.duration}
                            </div>
                            <div className="flex justify-center">
                              <div className={`px-3 py-1 rounded text-xs text-center whitespace-nowrap ${
                                call.status === 'completed' ? 'bg-green-100 text-green-700' :
                                call.status === 'missed' ? 'bg-red-100 text-red-700' :
                                'bg-yellow-100 text-yellow-700'
                              }`}>
                                {call.status}
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <DialogFooter className="flex-shrink-0">
                <Button variant="outline" onClick={() => setModalType(null)}>
                  Cancel
                </Button>
                <Button onClick={handleCallsSubmit} disabled={selectedCalls.length === 0}>
                  Add Selected ({selectedCalls.length})
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      {/* Business Working Hours */}
      <Card>
        <CardHeader>
          <CardTitle>Business Working Hours</CardTitle>
          <CardDescription>
            Configure your business working hours to optimize AI agent responses
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Enable Working Hours Toggle */}
          <div className="flex items-start justify-between p-4 border rounded-lg">
            <div className="space-y-1">
              <h4>Enable Business Hours</h4>
              <p className="text-sm text-muted-foreground">
                When enabled, configure specific working hours for your AI agent operations
              </p>
            </div>
            <Switch
              checked={workingHoursEnabled}
              onCheckedChange={setWorkingHoursEnabled}
            />
          </div>

          {/* Working Hours Configuration */}
          {workingHoursEnabled && (
            <div className="space-y-6 p-4 border rounded-lg bg-secondary/20">
              {/* Working Hours Type Selection */}


              {/* Custom Working Hours Configuration */}
              <div className="space-y-6">
                  {/* Timezone Selector */}
                  <div className="space-y-2">
                    <Label>Time zone</Label>
                    <Select value={timezone} onValueChange={setTimezone}>
                      <SelectTrigger className="max-w-md">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi">
                          (GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi
                        </SelectItem>
                        <SelectItem value="(GMT +0:00) London, Dublin">
                          (GMT +0:00) London, Dublin
                        </SelectItem>
                        <SelectItem value="(GMT -5:00) New York, Toronto">
                          (GMT -5:00) New York, Toronto
                        </SelectItem>
                        <SelectItem value="(GMT -8:00) Los Angeles, Vancouver">
                          (GMT -8:00) Los Angeles, Vancouver
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Days Configuration */}
                  <div className="space-y-3">
                    {/* Sunday */}
                    <div className="flex items-start gap-4">
                      <div className="flex items-center gap-2 w-16">
                        <Checkbox
                          checked={workingDays.sun.enabled}
                          onCheckedChange={() => toggleDay('sun')}
                        />
                        <Label className="text-sm">Sun</Label>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <Input
                            type="time"
                            value={workingDays.sun.from}
                            onChange={(e) => updateDayTime('sun', 'from', e.target.value)}
                            disabled={!workingDays.sun.enabled}
                            className="max-w-[140px]"
                          />
                          <span className="text-muted-foreground">→</span>
                          <Input
                            type="time"
                            value={workingDays.sun.to}
                            onChange={(e) => updateDayTime('sun', 'to', e.target.value)}
                            disabled={!workingDays.sun.enabled}
                            className="max-w-[140px]"
                          />
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={copyToAll}
                            className="text-blue-600 hover:text-blue-700"
                          >
                            Copy to all
                          </Button>
                        </div>
                        {workingDays.sun.enabled && workingDays.sun.from && workingDays.sun.to && workingDays.sun.from > workingDays.sun.to && (
                          <p className="text-sm text-red-500">Start time cannot be later than the end time</p>
                        )}
                      </div>
                    </div>

                    {/* Monday */}
                    <div className="flex items-start gap-4">
                      <div className="flex items-center gap-2 w-16">
                        <Checkbox
                          checked={workingDays.mon.enabled}
                          onCheckedChange={() => toggleDay('mon')}
                        />
                        <Label className="text-sm">Mon</Label>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Input
                            type="time"
                            value={workingDays.mon.from}
                            onChange={(e) => updateDayTime('mon', 'from', e.target.value)}
                            disabled={!workingDays.mon.enabled}
                            placeholder="From"
                            className="max-w-[140px]"
                          />
                          <span className="text-muted-foreground">→</span>
                          <Input
                            type="time"
                            value={workingDays.mon.to}
                            onChange={(e) => updateDayTime('mon', 'to', e.target.value)}
                            disabled={!workingDays.mon.enabled}
                            placeholder="To"
                            className="max-w-[140px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Tuesday */}
                    <div className="flex items-start gap-4">
                      <div className="flex items-center gap-2 w-16">
                        <Checkbox
                          checked={workingDays.tue.enabled}
                          onCheckedChange={() => toggleDay('tue')}
                        />
                        <Label className="text-sm">Tue</Label>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Input
                            type="time"
                            value={workingDays.tue.from}
                            onChange={(e) => updateDayTime('tue', 'from', e.target.value)}
                            disabled={!workingDays.tue.enabled}
                            placeholder="From"
                            className="max-w-[140px]"
                          />
                          <span className="text-muted-foreground">→</span>
                          <Input
                            type="time"
                            value={workingDays.tue.to}
                            onChange={(e) => updateDayTime('tue', 'to', e.target.value)}
                            disabled={!workingDays.tue.enabled}
                            placeholder="To"
                            className="max-w-[140px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Wednesday */}
                    <div className="flex items-start gap-4">
                      <div className="flex items-center gap-2 w-16">
                        <Checkbox
                          checked={workingDays.wed.enabled}
                          onCheckedChange={() => toggleDay('wed')}
                        />
                        <Label className="text-sm">Wed</Label>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Input
                            type="time"
                            value={workingDays.wed.from}
                            onChange={(e) => updateDayTime('wed', 'from', e.target.value)}
                            disabled={!workingDays.wed.enabled}
                            placeholder="From"
                            className="max-w-[140px]"
                          />
                          <span className="text-muted-foreground">→</span>
                          <Input
                            type="time"
                            value={workingDays.wed.to}
                            onChange={(e) => updateDayTime('wed', 'to', e.target.value)}
                            disabled={!workingDays.wed.enabled}
                            placeholder="To"
                            className="max-w-[140px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Thursday */}
                    <div className="flex items-start gap-4">
                      <div className="flex items-center gap-2 w-16">
                        <Checkbox
                          checked={workingDays.thu.enabled}
                          onCheckedChange={() => toggleDay('thu')}
                        />
                        <Label className="text-sm">Thu</Label>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Input
                            type="time"
                            value={workingDays.thu.from}
                            onChange={(e) => updateDayTime('thu', 'from', e.target.value)}
                            disabled={!workingDays.thu.enabled}
                            placeholder="From"
                            className="max-w-[140px]"
                          />
                          <span className="text-muted-foreground">→</span>
                          <Input
                            type="time"
                            value={workingDays.thu.to}
                            onChange={(e) => updateDayTime('thu', 'to', e.target.value)}
                            disabled={!workingDays.thu.enabled}
                            placeholder="To"
                            className="max-w-[140px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Friday */}
                    <div className="flex items-start gap-4">
                      <div className="flex items-center gap-2 w-16">
                        <Checkbox
                          checked={workingDays.fri.enabled}
                          onCheckedChange={() => toggleDay('fri')}
                        />
                        <Label className="text-sm">Fri</Label>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Input
                            type="time"
                            value={workingDays.fri.from}
                            onChange={(e) => updateDayTime('fri', 'from', e.target.value)}
                            disabled={!workingDays.fri.enabled}
                            placeholder="From"
                            className="max-w-[140px]"
                          />
                          <span className="text-muted-foreground">→</span>
                          <Input
                            type="time"
                            value={workingDays.fri.to}
                            onChange={(e) => updateDayTime('fri', 'to', e.target.value)}
                            disabled={!workingDays.fri.enabled}
                            placeholder="To"
                            className="max-w-[140px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Saturday */}
                    <div className="flex items-start gap-4">
                      <div className="flex items-center gap-2 w-16">
                        <Checkbox
                          checked={workingDays.sat.enabled}
                          onCheckedChange={() => toggleDay('sat')}
                        />
                        <Label className="text-sm">Sat</Label>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Input
                            type="time"
                            value={workingDays.sat.from}
                            onChange={(e) => updateDayTime('sat', 'from', e.target.value)}
                            disabled={!workingDays.sat.enabled}
                            placeholder="From"
                            className="max-w-[140px]"
                          />
                          <span className="text-muted-foreground">→</span>
                          <Input
                            type="time"
                            value={workingDays.sat.to}
                            onChange={(e) => updateDayTime('sat', 'to', e.target.value)}
                            disabled={!workingDays.sat.enabled}
                            placeholder="To"
                            className="max-w-[140px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

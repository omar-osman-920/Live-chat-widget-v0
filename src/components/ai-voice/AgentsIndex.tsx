import { useState } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import { Plus, MoreVertical, Edit, Trash2, Phone, PhoneCall, CheckCircle2, FileEdit, Search, X, History, Copy, Check as CheckIcon, Info } from 'lucide-react';
import CreateAgent from './CreateAgent';

const mockAgents = [
  {
    id: 1,
    name: 'Customer Support Agent',
    createdDate: '2025-10-15 14:30',
    state: 'live',
    calls: 342,
    ivr: 'Main Support Flow',
    assignedNumbers: '+1 (555) 123-4567',
  },
  {
    id: 2,
    name: 'Sales Assistant',
    createdDate: '2025-10-12 09:15',
    state: 'draft',
    calls: 218,
    ivr: 'Sales Inquiry Flow',
    assignedNumbers: '+1 (555) 234-5678',
  },
  {
    id: 3,
    name: 'Tech Support Bot',
    createdDate: '2025-10-08 16:45',
    state: 'draft',
    calls: 156,
    ivr: 'Technical Support Flow',
    assignedNumbers: '-',
  },
  {
    id: 4,
    name: 'Appointment Scheduler',
    createdDate: '2025-10-05 11:20',
    state: 'live',
    calls: 89,
    ivr: 'Appointment Booking Flow',
    assignedNumbers: '+1 (555) 345-6789',
  },
  {
    id: 5,
    name: 'Order Status Agent',
    createdDate: '2025-10-01 08:00',
    state: 'draft',
    calls: 45,
    ivr: 'Order Management Flow',
    assignedNumbers: '+1 (555) 456-7890',
  },
];

const mockPhoneNumbers = [
  { id: 1, number: '+1 (555) 123-4567', status: 'available' },
  { id: 2, number: '+1 (555) 234-5678', status: 'assigned' },
  { id: 3, number: '+1 (555) 345-6789', status: 'assigned' },
  { id: 4, number: '+1 (555) 456-7890', status: 'available' },
  { id: 5, number: '+1 (555) 567-8901', status: 'available' },
  { id: 6, number: '+1 (555) 678-9012', status: 'available' },
];

export default function AgentsIndex() {
  const { t } = useLanguage();
  const [agents, setAgents] = useState(mockAgents);
  const [showCreateAgent, setShowCreateAgent] = useState(false);
  const [editingAgent, setEditingAgent] = useState<typeof mockAgents[0] | null>(null);
  const [viewingVersionHistory, setViewingVersionHistory] = useState<typeof mockAgents[0] | null>(null);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedAgentId, setSelectedAgentId] = useState<number | null>(null);
  const [selectedPhoneNumbers, setSelectedPhoneNumbers] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedAgentId, setCopiedAgentId] = useState<number | null>(null);
  const [openTooltipId, setOpenTooltipId] = useState<number | null>(null);

  if (showCreateAgent) {
    return <CreateAgent onBack={() => setShowCreateAgent(false)} />;
  }

  if (editingAgent) {
    return (
      <CreateAgent 
        onBack={() => setEditingAgent(null)} 
        agentData={editingAgent}
        isEdit={true}
      />
    );
  }

  if (viewingVersionHistory) {
    return (
      <CreateAgent 
        onBack={() => setViewingVersionHistory(null)} 
        agentData={viewingVersionHistory}
        isEdit={true}
        showVersionHistory={true}
      />
    );
  }

  const handleEdit = (id: number) => {
    const agent = agents.find(a => a.id === id);
    if (agent) {
      setEditingAgent(agent);
    }
  };

  const handleVersionHistory = (id: number) => {
    const agent = agents.find(a => a.id === id);
    if (agent) {
      setViewingVersionHistory(agent);
    }
  };

  const handleDelete = (id: number) => {
    console.log('Delete agent:', id);
    // Delete functionality will be implemented later
  };

  const handleAssignNumber = (id: number) => {
    setSelectedAgentId(id);
    setSelectedPhoneNumbers([]);
    setSearchQuery('');
    setShowAssignModal(true);
  };

  const handleTestCall = (id: number) => {
    console.log('Test call for agent:', id);
    // Test call functionality will be implemented later
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    setAgents(agents.map(agent => 
      agent.id === id 
        ? { 
            ...agent, 
            state: newStatus,
            // Clear assigned numbers when changing to draft
            assignedNumbers: newStatus === 'draft' ? '-' : agent.assignedNumbers
          } 
        : agent
    ));
    console.log('Status changed for agent:', id, 'to:', newStatus);
  };

  const confirmAssignNumber = () => {
    if (selectedAgentId && selectedPhoneNumbers.length > 0) {
      setShowAssignModal(false);
      setShowConfirmModal(true);
    }
  };

  const finalizeAssignment = () => {
    if (selectedAgentId && selectedPhoneNumbers.length > 0) {
      const numbersString = selectedPhoneNumbers.join(', ');
      setAgents(agents.map(agent =>
        agent.id === selectedAgentId
          ? { ...agent, assignedNumbers: numbersString, state: 'live' }
          : agent
      ));
      setShowConfirmModal(false);
      setSelectedAgentId(null);
      setSelectedPhoneNumbers([]);
      setSearchQuery('');
    }
  };

  const handleIVRClick = (ivrName: string) => {
    console.log('Navigate to IVR flow:', ivrName);
    // IVR navigation will be implemented later
  };

  const getStateBadgeVariant = (state: string) => {
    switch (state) {
      case 'live':
        return 'default';
      case 'draft':
        return 'outline';
      default:
        return 'default';
    }
  };

  const getAvailableStatusTransitions = (currentState: string) => {
    // Only allow draft status transition
    return currentState === 'draft' ? [] : ['draft'];
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'live':
        return <CheckCircle2 className="w-4 h-4 mr-2" />;
      case 'draft':
        return <FileEdit className="w-4 h-4 mr-2" />;
      default:
        return null;
    }
  };

  const getStatusLabel = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const togglePhoneNumber = (number: string) => {
    setSelectedPhoneNumbers(prev => 
      prev.includes(number)
        ? prev.filter(n => n !== number)
        : [...prev, number]
    );
  };

  const removeSelectedNumber = (number: string) => {
    setSelectedPhoneNumbers(prev => prev.filter(n => n !== number));
  };

  const filteredPhoneNumbers = mockPhoneNumbers.filter(phone =>
    phone.number.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopyAgentLink = (agentId: number) => {
    const agentLink = `https://agent.yourcompany.com/ai-voice-agent-${agentId}`;
    try {
      // Create a temporary textarea element
      const textarea = document.createElement('textarea');
      textarea.value = agentLink;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      
      setCopiedAgentId(agentId);
      // Close and reopen tooltip to show "Copied" message
      setOpenTooltipId(null);
      setTimeout(() => setOpenTooltipId(agentId), 10);
      setTimeout(() => {
        setCopiedAgentId(null);
        setOpenTooltipId(null);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <TooltipProvider>
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl">{t('agents.title')}</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {t('agents.subtitle')}
          </p>
        </div>
        <Button className="gap-2" onClick={() => setShowCreateAgent(true)}>
          <Plus className="w-4 h-4" />
          {t('agents.createAgent')}
        </Button>
      </div>

      {/* Agents Table */}
      <div className="bg-white border border-border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('agents.name')}</TableHead>
              <TableHead>{t('agents.created')}</TableHead>
              <TableHead>
                <div className="flex items-center gap-1.5">
                  {t('agents.numOfCalls')}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">{t('agents.numOfCallsTooltip')}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {agents.map((agent) => (
              <TableRow key={agent.id}>
                <TableCell>{agent.name}</TableCell>
                <TableCell className="text-muted-foreground">
                  {agent.createdDate}
                </TableCell>
                <TableCell>{agent.calls.toLocaleString()}</TableCell>
                <TableCell onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center gap-2">
                    <Tooltip 
                      open={openTooltipId === agent.id}
                      onOpenChange={(open) => {
                        if (open) {
                          setOpenTooltipId(agent.id);
                        } else if (openTooltipId === agent.id) {
                          setOpenTooltipId(null);
                        }
                      }}
                    >
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2"
                          onClick={() => handleCopyAgentLink(agent.id)}
                        >
                          {copiedAgentId === agent.id ? (
                            <CheckIcon className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{copiedAgentId === agent.id ? 'Copied' : 'Copy agent link'}</p>
                      </TooltipContent>
                    </Tooltip>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="inline-flex items-center justify-center gap-2 h-8 rounded-md px-3 hover:bg-accent hover:text-accent-foreground transition-colors" type="button">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="z-50">
                        <DropdownMenuItem onClick={() => handleEdit(agent.id)}>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleVersionHistory(agent.id)}>
                          <History className="w-4 h-4 mr-2" />
                          Version history
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleDelete(agent.id)}
                          variant="destructive"
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Assign Phone Number Modal */}
      <Dialog open={showAssignModal} onOpenChange={setShowAssignModal}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Assign Numbers and Publish</DialogTitle>
            <DialogDescription>
              Select phone numbers to assign to this agent
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search phone numbers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>

            {/* Selected Numbers Display */}
            {selectedPhoneNumbers.length > 0 && (
              <div className="flex flex-wrap gap-2 p-3 bg-accent/50 rounded-lg">
                {selectedPhoneNumbers.map((number) => (
                  <div
                    key={number}
                    className="flex items-center gap-1 bg-white border border-border rounded-md px-2 py-1 text-sm"
                  >
                    <span>{number}</span>
                    <button
                      onClick={() => removeSelectedNumber(number)}
                      className="ml-1 hover:bg-accent rounded-sm p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Phone Numbers List */}
            <div className="max-h-[300px] overflow-y-auto space-y-2 border rounded-lg p-2">
              {filteredPhoneNumbers.length > 0 ? (
                filteredPhoneNumbers.map((phone) => (
                  <div
                    key={phone.id}
                    className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                    onClick={() => togglePhoneNumber(phone.number)}
                  >
                    <Checkbox
                      checked={selectedPhoneNumbers.includes(phone.number)}
                      onCheckedChange={() => togglePhoneNumber(phone.number)}
                    />
                    <Label
                      className="flex-1 cursor-pointer flex items-center justify-between"
                    >
                      <span>{phone.number}</span>
                      <Badge variant={phone.status === 'available' ? 'default' : 'secondary'}>
                        {phone.status}
                      </Badge>
                    </Label>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No phone numbers found
                </div>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAssignModal(false)}>
              Cancel
            </Button>
            <Button onClick={confirmAssignNumber} disabled={selectedPhoneNumbers.length === 0}>
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirmation Modal */}
      <Dialog open={showConfirmModal} onOpenChange={setShowConfirmModal}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Confirm Assignment and Publish</DialogTitle>
            <DialogDescription>
              Once the numbers are assigned, the AI agent will be published and set to live status.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="bg-accent/50 rounded-lg p-4 space-y-2">
              <p className="text-sm">
                <span className="text-muted-foreground">Numbers to assign:</span>
              </p>
              <div className="space-y-1">
                {selectedPhoneNumbers.map((number) => (
                  <p key={number} className="text-sm font-medium">{number}</p>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmModal(false)}>
              Cancel
            </Button>
            <Button onClick={finalizeAssignment}>
              OK
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
    </TooltipProvider>
  );
}

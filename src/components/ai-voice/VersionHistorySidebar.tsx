import { useState } from 'react';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { MoreVertical, RotateCcw, Pencil } from 'lucide-react';
import { Badge } from '../ui/badge';

interface Version {
  id: number;
  dateTime: string;
  editorName: string;
  versionName: string;
  isCurrent: boolean;
  data: any;
}

interface VersionHistorySidebarProps {
  agentId: number;
  currentVersion: Version;
  onVersionSelect: (version: Version) => void;
  onRestoreVersion: (versionId: number) => void;
}

const mockVersions: Version[] = [
  {
    id: 1,
    dateTime: 'October 21, 3:43 PM',
    editorName: 'Omar Goman',
    versionName: 'Initial Setup',
    isCurrent: true,
    data: {
      inboundGreeting: 'Hello, welcome to our service!',
      tone: 'professional',
      language: 'en',
    },
  },
  {
    id: 2,
    dateTime: 'October 21, 3:41 PM',
    editorName: 'Omar Goman',
    versionName: 'Updated greeting',
    isCurrent: false,
    data: {
      inboundGreeting: 'Hi there!',
      tone: 'friendly',
      language: 'en',
    },
  },
  {
    id: 3,
    dateTime: 'October 20, 2:15 PM',
    editorName: 'Sarah Johnson',
    versionName: 'Voice configuration',
    isCurrent: false,
    data: {
      inboundGreeting: 'Welcome!',
      tone: 'casual',
      language: 'en',
    },
  },
];

export default function VersionHistorySidebar({ 
  agentId, 
  currentVersion, 
  onVersionSelect,
  onRestoreVersion 
}: VersionHistorySidebarProps) {
  const [selectedVersionId, setSelectedVersionId] = useState(currentVersion.id);
  const [showRenameDialog, setShowRenameDialog] = useState(false);
  const [renamingVersionId, setRenamingVersionId] = useState<number | null>(null);
  const [newVersionName, setNewVersionName] = useState('');
  const [versions, setVersions] = useState<Version[]>(mockVersions);

  const handleVersionSelect = (versionId: number) => {
    const version = versions.find(v => v.id === versionId);
    if (version) {
      setSelectedVersionId(versionId);
      onVersionSelect(version);
    }
  };

  const handleRestoreClick = (versionId: number) => {
    onRestoreVersion(versionId);
  };

  const handleRenameClick = (versionId: number) => {
    const version = versions.find(v => v.id === versionId);
    if (version) {
      setRenamingVersionId(versionId);
      setNewVersionName(version.versionName);
      setShowRenameDialog(true);
    }
  };

  const handleRenameConfirm = () => {
    if (renamingVersionId) {
      setVersions(versions.map(v => 
        v.id === renamingVersionId 
          ? { ...v, versionName: newVersionName }
          : v
      ));
      setShowRenameDialog(false);
      setRenamingVersionId(null);
      setNewVersionName('');
    }
  };

  const selectedVersion = versions.find(v => v.id === selectedVersionId);

  return (
    <>
      <div className="w-80 border-l border-border bg-white flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm">Version history</h3>
            {selectedVersion && !selectedVersion.isCurrent && (
              <Button 
                size="sm" 
                className="gap-2"
                onClick={() => handleRestoreClick(selectedVersion.id)}
              >
                <RotateCcw className="w-3 h-3" />
                Restore this version
              </Button>
            )}
          </div>
          
          <Select defaultValue="all">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All versions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All versions</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This week</SelectItem>
              <SelectItem value="month">This month</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Version List */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            {/* Today Section */}
            <div className="mb-4">
              <h4 className="text-xs text-muted-foreground mb-3">Today</h4>
              <div className="space-y-2">
                {versions.map((version) => (
                  <div
                    key={version.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedVersionId === version.id
                        ? 'bg-accent border-primary'
                        : 'border-border hover:bg-accent/50'
                    }`}
                    onClick={() => handleVersionSelect(version.id)}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm truncate">{version.dateTime}</p>
                        </div>
                        {version.isCurrent && (
                          <Badge variant="secondary" className="mb-2 text-xs">
                            Current version
                          </Badge>
                        )}
                        <p className="text-xs text-muted-foreground mb-1">
                          {version.editorName}
                        </p>
                        <p className="text-xs truncate">
                          {version.versionName}
                        </p>
                      </div>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button 
                            className="inline-flex items-center justify-center h-6 w-6 rounded hover:bg-accent-foreground/10 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          {!version.isCurrent && (
                            <DropdownMenuItem onClick={() => handleRestoreClick(version.id)}>
                              <RotateCcw className="w-4 h-4 mr-2" />
                              Restore version
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem onClick={() => handleRenameClick(version.id)}>
                            <Pencil className="w-4 h-4 mr-2" />
                            Rename version
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rename Dialog */}
      <Dialog open={showRenameDialog} onOpenChange={setShowRenameDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rename Version</DialogTitle>
            <DialogDescription>
              Enter a new name for this version
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Label>Version Name</Label>
            <Input
              value={newVersionName}
              onChange={(e) => setNewVersionName(e.target.value)}
              placeholder="Enter version name"
              className="mt-2"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowRenameDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleRenameConfirm}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

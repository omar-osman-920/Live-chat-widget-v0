import { useState } from 'react';
import { Button } from '../ui/button';
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
import { Badge } from '../ui/badge';
import { Plus, MoreVertical, Edit, Trash2, FileText, Download, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const mockDocuments = [
  {
    id: 1,
    name: 'Product Documentation',
    type: 'PDF',
    size: '2.4 MB',
    uploadedDate: '2025-10-18 14:30',
    status: 'processed',
  },
  {
    id: 2,
    name: 'FAQ Database',
    type: 'JSON',
    size: '156 KB',
    uploadedDate: '2025-10-15 09:15',
    status: 'processed',
  },
  {
    id: 3,
    name: 'Support Guidelines',
    type: 'DOCX',
    size: '890 KB',
    uploadedDate: '2025-10-12 16:45',
    status: 'processing',
  },
  {
    id: 4,
    name: 'Company Policies',
    type: 'PDF',
    size: '1.8 MB',
    uploadedDate: '2025-10-10 11:20',
    status: 'processed',
  },
  {
    id: 5,
    name: 'Training Scripts',
    type: 'TXT',
    size: '45 KB',
    uploadedDate: '2025-10-08 08:00',
    status: 'processed',
  },
];

// Mock data for knowledge base to agent linkages
const knowledgeBaseAgentLinks = {
  1: ['Customer Support Agent', 'Sales Assistant'], // Product Documentation is linked to 2 agents
  2: ['Customer Support Agent', 'Tech Support Bot'], // FAQ Database is linked to 2 agents
  3: ['Customer Support Agent'], // Support Guidelines is linked to 1 agent
  // Documents 4 and 5 are not linked to any agents
};

export default function KnowledgebasePanel() {
  const { t } = useLanguage();
  const [showLinkedAgentsModal, setShowLinkedAgentsModal] = useState(false);
  const [linkedAgents, setLinkedAgents] = useState<string[]>([]);
  const [attemptedDeleteDoc, setAttemptedDeleteDoc] = useState<string>('');

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'processed':
        return 'default';
      case 'processing':
        return 'secondary';
      case 'error':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  const handleDelete = (docId: number, docName: string) => {
    // Check if this knowledge base is linked to any agents
    const linkedToAgents = knowledgeBaseAgentLinks[docId as keyof typeof knowledgeBaseAgentLinks];
    
    if (linkedToAgents && linkedToAgents.length > 0) {
      // Show error modal with linked agents
      setLinkedAgents(linkedToAgents);
      setAttemptedDeleteDoc(docName);
      setShowLinkedAgentsModal(true);
    } else {
      // Proceed with deletion
      console.log('Deleting document:', docId);
      // Delete functionality will be implemented later
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl">{t('kb.title')}</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {t('kb.subtitle')}
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          {t('kb.uploadDocument')}
        </Button>
      </div>

      {/* Documents Table */}
      <div className="bg-white border border-border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('kb.documentName')}</TableHead>
              <TableHead>{t('kb.type')}</TableHead>
              <TableHead>{t('kb.size')}</TableHead>
              <TableHead>{t('kb.uploadedDate')}</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockDocuments.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  {doc.name}
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{doc.type}</Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{doc.size}</TableCell>
                <TableCell className="text-muted-foreground">
                  {doc.uploadedDate}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Download className="w-4 h-4 mr-2" />
                        {t('kb.download')}
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="text-destructive"
                        onClick={() => handleDelete(doc.id, doc.name)}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        {t('kb.delete')}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Linked Agents Error Modal */}
      <Dialog open={showLinkedAgentsModal} onOpenChange={setShowLinkedAgentsModal}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                <AlertCircle className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <DialogTitle>{t('kb.cannotDelete')}</DialogTitle>
                <DialogDescription className="mt-1">
                  {t('kb.docInUse')}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground mb-4">
              {t('kb.linkedMessage')} "<span className="font-medium text-foreground">{attemptedDeleteDoc}</span>" {t('kb.linkedMessageEnd')}{linkedAgents.length > 1 ? t('kb.linkedMessagePlural') : ''}:
            </p>
            <div className="bg-accent/50 rounded-lg p-4 space-y-2">
              {linkedAgents.map((agent, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="font-medium">{agent}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {t('kb.removeMessage')}
            </p>
          </div>
          <DialogFooter>
            <Button onClick={() => setShowLinkedAgentsModal(false)}>
              {t('kb.ok')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

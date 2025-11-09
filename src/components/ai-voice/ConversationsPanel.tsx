import { useState } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { MoreVertical, Play, Download, Trash2, Search, Phone } from 'lucide-react';

const mockConversations = [
  {
    id: 1,
    callId: 'CALL-2025-001',
    agent: 'Customer Support Agent',
    phoneNumber: '+1 (555) 123-4567',
    duration: '4:32',
    date: '2025-10-20 14:30',
    status: 'completed',
    sentiment: 'positive',
  },
  {
    id: 2,
    callId: 'CALL-2025-002',
    agent: 'Sales Assistant',
    phoneNumber: '+1 (555) 234-5678',
    duration: '6:15',
    date: '2025-10-20 13:45',
    status: 'completed',
    sentiment: 'neutral',
  },
  {
    id: 3,
    callId: 'CALL-2025-003',
    agent: 'Tech Support Bot',
    phoneNumber: '+1 (555) 345-6789',
    duration: '3:20',
    date: '2025-10-20 12:10',
    status: 'escalated',
    sentiment: 'negative',
  },
  {
    id: 4,
    callId: 'CALL-2025-004',
    agent: 'Customer Support Agent',
    phoneNumber: '+1 (555) 456-7890',
    duration: '5:48',
    date: '2025-10-20 11:25',
    status: 'completed',
    sentiment: 'positive',
  },
  {
    id: 5,
    callId: 'CALL-2025-005',
    agent: 'Appointment Scheduler',
    phoneNumber: '+1 (555) 567-8901',
    duration: '2:15',
    date: '2025-10-20 10:00',
    status: 'completed',
    sentiment: 'positive',
  },
];

export default function ConversationsPanel() {
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'completed':
        return 'default';
      case 'escalated':
        return 'secondary';
      case 'dropped':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'text-green-600';
      case 'negative':
        return 'text-red-600';
      case 'neutral':
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl">Conversations</h1>
          <p className="text-sm text-muted-foreground mt-1">
            View and analyze all AI voice agent call records
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by call ID or phone number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select defaultValue="all-agents">
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-agents">All Agents</SelectItem>
            <SelectItem value="customer-support">Customer Support Agent</SelectItem>
            <SelectItem value="sales">Sales Assistant</SelectItem>
            <SelectItem value="tech-support">Tech Support Bot</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-status">
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-status">All Status</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="escalated">Escalated</SelectItem>
            <SelectItem value="dropped">Dropped</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Conversations Table */}
      <div className="bg-white border border-border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Call ID</TableHead>
              <TableHead>Agent</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Sentiment</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockConversations.map((conversation) => (
              <TableRow key={conversation.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    {conversation.callId}
                  </div>
                </TableCell>
                <TableCell>{conversation.agent}</TableCell>
                <TableCell className="text-muted-foreground">
                  {conversation.phoneNumber}
                </TableCell>
                <TableCell>{conversation.duration}</TableCell>
                <TableCell className="text-muted-foreground">
                  {conversation.date}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(conversation.status)}>
                    {conversation.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className={getSentimentColor(conversation.sentiment)}>
                    {conversation.sentiment}
                  </span>
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
                        <Play className="w-4 h-4 mr-2" />
                        Play Recording
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="w-4 h-4 mr-2" />
                        Download Transcript
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

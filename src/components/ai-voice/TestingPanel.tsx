import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
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
import { Plus, MoreVertical, Play, Edit, Trash2, CheckCircle2, XCircle, Clock } from 'lucide-react';

const mockTestCases = [
  {
    id: 1,
    name: 'Order Status Inquiry',
    agent: 'Customer Support Agent',
    lastRun: '2025-10-20 14:30',
    status: 'passed',
    duration: '3:45',
  },
  {
    id: 2,
    name: 'Product Return Request',
    agent: 'Customer Support Agent',
    lastRun: '2025-10-20 12:15',
    status: 'passed',
    duration: '4:12',
  },
  {
    id: 3,
    name: 'Technical Issue Escalation',
    agent: 'Tech Support Bot',
    lastRun: '2025-10-20 11:30',
    status: 'failed',
    duration: '2:30',
  },
  {
    id: 4,
    name: 'Appointment Booking',
    agent: 'Appointment Scheduler',
    lastRun: '2025-10-20 10:00',
    status: 'passed',
    duration: '2:00',
  },
  {
    id: 5,
    name: 'Sales Qualification',
    agent: 'Sales Assistant',
    lastRun: '2025-10-19 16:45',
    status: 'pending',
    duration: '-',
  },
];

export default function TestingPanel() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed':
        return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case 'failed':
        return <XCircle className="w-4 h-4 text-red-600" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      default:
        return null;
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'passed':
        return 'default';
      case 'failed':
        return 'destructive';
      case 'pending':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl">Testing</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Create and run test cases to ensure your AI agents perform correctly
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Create Test Case
        </Button>
      </div>

      {/* Test Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Test Cases</p>
                <p className="text-3xl mt-2">5</p>
              </div>
              <Play className="w-10 h-10 text-blue-500 opacity-20" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Passed</p>
                <p className="text-3xl mt-2 text-green-600">3</p>
              </div>
              <CheckCircle2 className="w-10 h-10 text-green-500 opacity-20" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Failed</p>
                <p className="text-3xl mt-2 text-red-600">1</p>
              </div>
              <XCircle className="w-10 h-10 text-red-500 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Test Cases Table */}
      <div className="bg-white border border-border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Test Case Name</TableHead>
              <TableHead>Agent</TableHead>
              <TableHead>Last Run</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTestCases.map((testCase) => (
              <TableRow key={testCase.id}>
                <TableCell>{testCase.name}</TableCell>
                <TableCell className="text-muted-foreground">{testCase.agent}</TableCell>
                <TableCell className="text-muted-foreground">{testCase.lastRun}</TableCell>
                <TableCell>{testCase.duration}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(testCase.status)}
                    <Badge variant={getStatusBadgeVariant(testCase.status)}>
                      {testCase.status}
                    </Badge>
                  </div>
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
                        Run Test
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
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

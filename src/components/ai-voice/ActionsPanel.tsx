import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Plus, PhoneOff, Database, Send, Calendar, DollarSign, Search } from 'lucide-react';

const mockActions = [
  {
    id: 1,
    name: 'Hang Up Call',
    description: 'End the current call',
    type: 'Call Control',
    icon: PhoneOff,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
  {
    id: 2,
    name: 'Get Order Information',
    description: 'Fetch order details from API using order ID',
    type: 'API Call',
    icon: Database,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    id: 3,
    name: 'Send Email',
    description: 'Send email to customer with information',
    type: 'Communication',
    icon: Send,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    id: 4,
    name: 'Schedule Appointment',
    description: 'Book an appointment in the calendar system',
    type: 'API Call',
    icon: Calendar,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    id: 5,
    name: 'Process Payment',
    description: 'Initiate payment processing workflow',
    type: 'Transaction',
    icon: DollarSign,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    id: 6,
    name: 'Search Knowledge Base',
    description: 'Query internal knowledge base for information',
    type: 'Data Retrieval',
    icon: Search,
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
  },
];

export default function ActionsPanel() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl">Actions</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Define actions that your AI agents can perform during calls
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Create Action
        </Button>
      </div>

      {/* Actions Grid */}
      <div className="grid grid-cols-2 gap-4">
        {mockActions.map((action) => {
          const Icon = action.icon;
          return (
            <Card key={action.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${action.bgColor} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${action.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-base">{action.name}</CardTitle>
                      <CardDescription className="text-sm mt-1">
                        {action.description}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Badge variant="outline">{action.type}</Badge>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

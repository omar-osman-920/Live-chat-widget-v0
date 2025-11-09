import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';
import { Button } from '../../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { Switch } from '../../ui/switch';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '../../ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../ui/collapsible';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { Input } from '../../ui/input';
import { useLanguage } from '../../../contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu';
import { Plus, PhoneOff, UserPlus, Voicemail, ChevronDown } from 'lucide-react';

interface Action {
  id: string;
  name: string;
  description: string;
  icon: any;
  enabled: boolean;
  trigger: string;
  processingMessage: string;
}

interface AgentBehaviorTabProps {
  initialData?: any;
}

const mockAgents = [
  { id: '1', name: 'John Smith' },
  { id: '2', name: 'Sarah Johnson' },
  { id: '3', name: 'Mike Wilson' },
  { id: '4', name: 'Emily Davis' },
];

const mockGroups = [
  { id: '1', name: 'Sales Team' },
  { id: '2', name: 'Support Team' },
  { id: '3', name: 'Technical Team' },
  { id: '4', name: 'Management' },
];

const predefinedVariables = [
  { label: 'Customer Name', value: '{customer_name}' },
  { label: 'Customer Number', value: '{customer_number}' },
  { label: 'Customer Email', value: '{customer_email}' },
  { label: 'Customer Company', value: '{customer_company}' },
  { label: 'Appointment Date', value: '{appointment_date}' },
];

export default function AgentBehaviorTab({ initialData }: AgentBehaviorTabProps) {
  const { t } = useLanguage();
  const [inboundGreeting, setInboundGreeting] = useState(initialData?.inboundGreeting || '');
  const [outboundGreeting, setOutboundGreeting] = useState(initialData?.outboundGreeting || '');
  const [interruptionEnabled, setInterruptionEnabled] = useState(initialData?.interruptionEnabled ?? true);
  const [actions, setActions] = useState<Action[]>(initialData?.actions || [
    {
      id: 'call-end',
      name: 'Call End',
      description: 'Allow the agent to end the call',
      icon: PhoneOff,
      enabled: true,
      trigger: '',
      processingMessage: '',
    },
    {
      id: 'transfer-agent',
      name: 'Transfer to Agent',
      description: 'Transfer the call to a human agent',
      icon: UserPlus,
      enabled: true,
      trigger: '',
      processingMessage: '',
    },
    {
      id: 'voicemail',
      name: 'Voice Mail',
      description: 'Send caller to voicemail',
      icon: Voicemail,
      enabled: false,
      trigger: '',
      processingMessage: '',
    },
  ]);

  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [transferRulesOpen, setTransferRulesOpen] = useState(false);
  const [transferType, setTransferType] = useState<'agents' | 'groups' | 'phone-numbers'>('agents');
  const [selectedTransferDestination, setSelectedTransferDestination] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fallbackConfiguration, setFallbackConfiguration] = useState('');
  const [guardrailsEnabled, setGuardrailsEnabled] = useState(initialData?.guardrailsEnabled ?? false);
  const [guardrailsText, setGuardrailsText] = useState(initialData?.guardrailsText || '');

  const insertVariable = (variable: string, type: 'inbound' | 'outbound') => {
    if (type === 'inbound') {
      setInboundGreeting(prev => prev + ' ' + variable);
    } else {
      setOutboundGreeting(prev => prev + ' ' + variable);
    }
  };

  const toggleAction = (actionId: string) => {
    const action = actions.find(a => a.id === actionId);
    if (!action?.enabled) {
      // If turning on, open the drawer
      setSelectedAction(actionId);
    }
    setActions(actions.map(a =>
      a.id === actionId ? { ...a, enabled: !a.enabled } : a
    ));
  };

  const updateActionConfig = (actionId: string, field: 'trigger' | 'processingMessage', value: string) => {
    setActions(actions.map(a =>
      a.id === actionId ? { ...a, [field]: value } : a
    ));
  };

  const currentAction = actions.find(a => a.id === selectedAction);

  return (
    <div className="space-y-6">
      {/* Greeting Messages */}
      <Card>
        <CardHeader>
          <CardTitle>Greeting Messages</CardTitle>
          <CardDescription>Configure greeting messages for your agent</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Greeting Message</Label>
            <Textarea
              value={inboundGreeting}
              onChange={(e) => setInboundGreeting(e.target.value)}
              placeholder="Enter the greeting message..."
              rows={4}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-end">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <Plus className="w-3 h-3" />
                    Add Variable
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel className="bg-gray-100 text-muted-foreground -mx-1 px-2">System Variables</DropdownMenuLabel>
                  {predefinedVariables.map((variable) => (
                    <DropdownMenuItem
                      key={variable.value}
                      onClick={() => insertVariable(variable.value, 'inbound')}
                    >
                      {variable.value}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => insertVariable('{variable_name}', 'inbound')}
                  >
                    <Plus className="w-3 h-3 mr-2" />
                    External Variables
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Agent Interruption */}
      <Card>
        <CardHeader>
          <CardTitle>AI Agent Interruption</CardTitle>
          <CardDescription>Control how the AI agent responds when interrupted by the caller</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-start justify-between p-4 border rounded-lg">
            <div className="space-y-1">
              <h4>Enable Interruption</h4>
              <p className="text-sm text-muted-foreground">
                When enabled, the AI agent will stop talking if the caller interrupts. 
                This creates a more natural conversation flow and prevents the agent from 
                talking over the caller.
              </p>
            </div>
            <Switch
              checked={interruptionEnabled}
              onCheckedChange={setInterruptionEnabled}
            />
          </div>
        </CardContent>
      </Card>

      {/* Configure Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Configure Actions</CardTitle>
          <CardDescription>
            Enable and configure actions that your AI agent can perform during calls
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {actions.filter(action => action.id !== 'voicemail').map((action) => {
            const Icon = action.icon;
            const isTransferAgent = action.id === 'transfer-agent';
            const isEndCall = action.id === 'call-end';
            const showFallback = isTransferAgent && !action.enabled;
            
            return (
              <div key={action.id} className="space-y-4">
                <div
                  className="flex items-start justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      action.enabled ? 'bg-blue-100' : 'bg-secondary'
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        action.enabled ? 'text-blue-600' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div>
                      <h4>{action.name}</h4>
                      <p className="text-sm text-muted-foreground">{action.description}</p>
                      {(action.enabled || isEndCall) && (
                        <button
                          onClick={() => setSelectedAction(action.id)}
                          className="text-sm text-blue-600 hover:underline mt-2"
                        >
                          Configure settings
                        </button>
                      )}
                    </div>
                  </div>
                  {!isEndCall && (
                    <Switch
                      checked={action.enabled}
                      onCheckedChange={() => toggleAction(action.id)}
                    />
                  )}
                </div>
                
                {/* Fallback Configuration - Shows when Transfer to Agent is disabled */}
                {showFallback && (
                  <div className="ml-14 space-y-2 p-4 border rounded-lg bg-secondary/30">
                    <Label>Fallback Configuration</Label>
                    <Textarea
                      value={fallbackConfiguration}
                      onChange={(e) => setFallbackConfiguration(e.target.value)}
                      placeholder="Enter what the agent should do when it cannot handle or address customer inquiries..."
                      rows={4}
                    />
                    <p className="text-xs text-muted-foreground">
                      Define the agent's behavior when unable to resolve customer inquiries without transferring to a human agent
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Guardrails */}
      <Card>
        <CardHeader>
          <CardTitle>Guardrails</CardTitle>
          <CardDescription>
            Add optional extra guardrails for your AI agent. We already apply guardrails to all agents by default.{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Learn more
            </a>{' '}
            about our default guardrails.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <h4>Enable Additional Guardrails</h4>
                <p className="text-sm text-muted-foreground">
                  Add custom guardrails on top of our default protection to further control your agent's behavior
                </p>
              </div>
              <Switch
                checked={guardrailsEnabled}
                onCheckedChange={setGuardrailsEnabled}
              />
            </div>
            
            {guardrailsEnabled && (
              <div className="space-y-2">
                <Label>Additional Guardrails</Label>
                <Textarea
                  value={guardrailsText}
                  onChange={(e) => setGuardrailsText(e.target.value)}
                  placeholder="Enter additional guardrails for your agent (e.g., 'Never discuss pricing', 'Always confirm appointment details before booking')..."
                  rows={6}
                />
                <p className="text-xs text-muted-foreground">
                  Specify any additional rules or restrictions for your agent's conversations
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Configuration Drawer */}
      <Sheet open={!!selectedAction} onOpenChange={(open) => !open && setSelectedAction(null)}>
        <SheetContent className="w-full sm:max-w-[540px] overflow-y-auto">
          <SheetHeader className="px-6">
            <SheetTitle>Configure {currentAction?.name}</SheetTitle>
            <SheetDescription>
              Set up the trigger and processing message for this action
            </SheetDescription>
          </SheetHeader>
          
          {currentAction && (
            <div className="space-y-6 px-6 pb-6">
              <div className="space-y-2">
                <Label>Action Trigger</Label>
                <Textarea
                  value={currentAction.trigger}
                  onChange={(e) => updateActionConfig(currentAction.id, 'trigger', e.target.value)}
                  placeholder="Describe when this action should be triggered..."
                  rows={4}
                />
                <p className="text-xs text-muted-foreground">
                  Define the conditions or keywords that will trigger this action
                </p>
              </div>

              <div className="space-y-2">
                <Label>Action Processing Message</Label>
                <Textarea
                  value={currentAction.processingMessage}
                  onChange={(e) => updateActionConfig(currentAction.id, 'processingMessage', e.target.value)}
                  placeholder="Enter the message the agent will say while processing..."
                  rows={4}
                />
                <p className="text-xs text-muted-foreground">
                  The message the AI agent will say while this action is being processed
                </p>
              </div>

              {/* Transfer Rules Section - Only for Transfer to Agent */}
              {currentAction.id === 'transfer-agent' && currentAction.enabled && (
                <Collapsible open={transferRulesOpen} onOpenChange={setTransferRulesOpen}>
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                    >
                      Transfer Rules
                      <ChevronDown className={`w-4 h-4 transition-transform ${transferRulesOpen ? 'rotate-180' : ''}`} />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label>Transfer To</Label>
                      <Select value={transferType} onValueChange={(value: any) => {
                        setTransferType(value);
                        setSelectedTransferDestination('');
                        setPhoneNumber('');
                      }}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select transfer destination type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="agents">Agents</SelectItem>
                          <SelectItem value="groups">Groups</SelectItem>
                          <SelectItem value="phone-numbers">Phone Numbers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {transferType === 'agents' && (
                      <div className="space-y-2">
                        <Label>Select Agent</Label>
                        <Select value={selectedTransferDestination} onValueChange={setSelectedTransferDestination}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose an agent" />
                          </SelectTrigger>
                          <SelectContent>
                            {mockAgents.map((agent) => (
                              <SelectItem key={agent.id} value={agent.id}>
                                {agent.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {transferType === 'groups' && (
                      <div className="space-y-2">
                        <Label>Select Group</Label>
                        <Select value={selectedTransferDestination} onValueChange={setSelectedTransferDestination}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a group" />
                          </SelectTrigger>
                          <SelectContent>
                            {mockGroups.map((group) => (
                              <SelectItem key={group.id} value={group.id}>
                                {group.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {transferType === 'phone-numbers' && (
                      <div className="space-y-2">
                        <Label>Phone Number</Label>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">
                          Enter the phone number to transfer calls to
                        </p>
                      </div>
                    )}
                  </CollapsibleContent>
                </Collapsible>
              )}

              <div className="p-4 bg-muted rounded-lg">
                <h4 className="mb-2">Example Configuration</h4>
                {currentAction.id === 'call-end' && (
                  <div className="text-sm space-y-2">
                    <p><strong>Trigger:</strong> "When the caller says goodbye, thank you, or indicates they're done"</p>
                    <p><strong>Processing Message:</strong> "Thank you for calling. Have a great day!"</p>
                  </div>
                )}
                {currentAction.id === 'transfer-agent' && (
                  <div className="text-sm space-y-2">
                    <p><strong>Trigger:</strong> "When caller requests to speak with a human or when unable to resolve issue"</p>
                    <p><strong>Processing Message:</strong> "Let me transfer you to one of our specialists. Please hold for a moment."</p>
                  </div>
                )}
                {currentAction.id === 'voicemail' && (
                  <div className="text-sm space-y-2">
                    <p><strong>Trigger:</strong> "When all agents are busy or outside business hours"</p>
                    <p><strong>Processing Message:</strong> "I'll direct you to voicemail where you can leave a message."</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

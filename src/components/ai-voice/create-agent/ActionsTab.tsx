import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';
import { Switch } from '../../ui/switch';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '../../ui/sheet';
import { PhoneOff, UserPlus, Voicemail } from 'lucide-react';

interface Action {
  id: string;
  name: string;
  description: string;
  icon: any;
  enabled: boolean;
  trigger: string;
  processingMessage: string;
}

interface ActionsTabProps {
  initialData?: any;
}

export default function ActionsTab({ initialData }: ActionsTabProps) {
  const [actions, setActions] = useState<Action[]>(initialData?.actions || [
    {
      id: 'call-end',
      name: 'Call End',
      description: 'Allow the agent to end the call',
      icon: PhoneOff,
      enabled: false,
      trigger: '',
      processingMessage: '',
    },
    {
      id: 'transfer-agent',
      name: 'Transfer to Agent',
      description: 'Transfer the call to a human agent',
      icon: UserPlus,
      enabled: false,
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
      <Card>
        <CardHeader>
          <CardTitle>Configure Actions</CardTitle>
          <CardDescription>
            Enable and configure actions that your AI agent can perform during calls
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <div
                key={action.id}
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
                    {action.enabled && (
                      <button
                        onClick={() => setSelectedAction(action.id)}
                        className="text-sm text-blue-600 hover:underline mt-2"
                      >
                        Configure settings
                      </button>
                    )}
                  </div>
                </div>
                <Switch
                  checked={action.enabled}
                  onCheckedChange={() => toggleAction(action.id)}
                />
              </div>
            );
          })}
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

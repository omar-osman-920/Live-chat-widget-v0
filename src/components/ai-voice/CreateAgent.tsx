import { useState } from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, Save, ChevronRight, Check, Upload, Copy, Check as CheckIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import AgentInformationTab from './create-agent/AgentInformationTab';
import AgentBehaviorTab from './create-agent/AgentBehaviorTab';
import CompanyInformationTab from './create-agent/CompanyInformationTab';
import SystemPromptTab from './create-agent/SystemPromptTab';
import VersionHistorySidebar from './VersionHistorySidebar';
import { useLanguage } from '../../contexts/LanguageContext';

interface CreateAgentProps {
  onBack: () => void;
  agentData?: any;
  isEdit?: boolean;
  showVersionHistory?: boolean;
}

export default function CreateAgent({ onBack, agentData, isEdit = false, showVersionHistory = false }: CreateAgentProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('agent-info');
  const [selectedVersionData, setSelectedVersionData] = useState(agentData);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [agentLink] = useState('https://agent.yourcompany.com/ai-voice-agent-123');

  // Determine if we're in creation mode (step wizard) or edit/version history mode (tabs)
  const isCreationMode = !isEdit && !showVersionHistory;

  // Define steps for creation mode
  const steps = [
    { id: 'agent-info', label: t('createAgent.step1'), number: 1 },
    { id: 'agent-behavior', label: t('createAgent.step2'), number: 2 },
    { id: 'company-info', label: t('createAgent.step3'), number: 3 },
    { id: 'system-prompt', label: t('createAgent.step4'), number: 4 },
  ];

  // Define tabs for edit/version history mode
  const tabs = [
    { id: 'agent-info', label: t('createAgent.step1') },
    { id: 'agent-behavior', label: t('createAgent.step2') },
    { id: 'company-info', label: t('createAgent.step3') },
    { id: 'system-prompt', label: t('promptReview.title') },
  ];

  const currentVersion = {
    id: 1,
    dateTime: 'October 21, 3:43 PM',
    editorName: 'Omar Goman',
    versionName: 'Initial Setup',
    isCurrent: true,
    data: agentData,
  };

  const handleVersionSelect = (version: any) => {
    setSelectedVersionData(version.data);
  };

  const handleRestoreVersion = (versionId: number) => {
    console.log('Restore version:', versionId);
    // In a real application, this would restore the version
  };

  const getCurrentStepIndex = () => {
    return steps.findIndex(step => step.id === activeTab);
  };

  const handleNext = () => {
    const currentIndex = getCurrentStepIndex();
    if (currentIndex < steps.length - 1) {
      setActiveTab(steps[currentIndex + 1].id);
    }
  };

  const handlePrevious = () => {
    const currentIndex = getCurrentStepIndex();
    if (currentIndex > 0) {
      setActiveTab(steps[currentIndex - 1].id);
    }
  };

  const isLastStep = getCurrentStepIndex() === steps.length - 1;
  const isFirstStep = getCurrentStepIndex() === 0;

  const handleCopyLink = () => {
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
      
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handlePublish = () => {
    setShowPublishModal(true);
  };

  const handleSaveDraft = () => {
    console.log('Saving as draft...');
    // Add your save draft logic here
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-0">
      <div className={`flex-1 flex flex-col ${showVersionHistory ? 'pr-6' : ''}`}>
        {/* Header - Not scrollable */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-2xl">{isEdit ? t('general.edit') + ' ' + t('sidebar.agents').slice(0, -1) : t('createAgent.title')}</h1>
              <p className="text-sm text-muted-foreground mt-1">
                {t('agents.subtitle')}
              </p>
            </div>
          </div>
          <Button className="gap-2" onClick={handlePublish}>
            <Upload className="w-4 h-4" />
            {t('general.save')}
          </Button>
        </div>

        {/* Publish Modal */}
        <Dialog open={showPublishModal} onOpenChange={setShowPublishModal}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Agent Published Successfully!</DialogTitle>
              <DialogDescription>
                Your AI voice agent is now live. Share this link to let users interact with your agent.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <label className="text-sm">Agent Link</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={agentLink}
                    readOnly
                    className="flex-1 px-3 py-2 text-sm border rounded-md bg-secondary/50"
                  />
                  <Button
                    size="sm"
                    variant={copied ? "default" : "outline"}
                    onClick={handleCopyLink}
                    className="gap-2"
                  >
                    {copied ? (
                      <>
                        <CheckIcon className="w-4 h-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <Button 
                  className="w-full" 
                  onClick={() => setShowPublishModal(false)}
                >
                  Done
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Step Wizard for Creation Mode */}
        {isCreationMode && (
          <div className="flex-1 overflow-auto">
            <div className="space-y-6">
              {/* Step Indicators */}
              <div className="sticky top-0 bg-white z-10 pb-6 pt-2 -mt-2">
                <div className="flex items-start max-w-4xl mx-auto">
                  {steps.map((step, index) => {
                    const isActive = activeTab === step.id;
                    const isCompleted = getCurrentStepIndex() > index;
                    
                    return (
                      <div key={step.id} className="flex items-center flex-1">
                        <div className="flex flex-col items-center w-full">
                          <button
                            onClick={() => setActiveTab(step.id)}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                              isActive
                                ? 'bg-primary text-primary-foreground'
                                : isCompleted
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            {isCompleted ? <Check className="w-5 h-5" /> : step.number}
                          </button>
                          <span className={`text-sm mt-2 text-center whitespace-nowrap ${isActive ? '' : 'text-muted-foreground'}`}>
                            {step.label}
                          </span>
                        </div>
                        {index < steps.length - 1 && (
                          <div className="relative flex-1 mx-4 mt-5">
                            <div className={`h-[2px] w-full ${
                              isCompleted ? 'bg-primary' : 'bg-muted'
                            }`} />
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${
                              isCompleted ? 'bg-primary' : 'bg-muted'
                            }`} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step Content */}
              <div className="space-y-6">
                {activeTab === 'agent-info' && (
                  <AgentInformationTab initialData={selectedVersionData} key={selectedVersionData?.id} />
                )}
                {activeTab === 'agent-behavior' && (
                  <AgentBehaviorTab initialData={selectedVersionData} key={selectedVersionData?.id} />
                )}
                {activeTab === 'company-info' && (
                  <CompanyInformationTab initialData={selectedVersionData} key={selectedVersionData?.id} />
                )}
                {activeTab === 'system-prompt' && (
                  <SystemPromptTab initialData={selectedVersionData} key={selectedVersionData?.id} />
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={isFirstStep}
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={isLastStep}
                  className="gap-2"
                >
                  {isLastStep ? 'Finish' : 'Next'}
                  {!isLastStep && <ChevronRight className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Tabs for Edit/Version History Mode */}
        {!isCreationMode && (
          <div className="flex-1 flex flex-col overflow-hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col overflow-hidden">
              <TabsList className="grid w-full h-auto p-1 grid-cols-4 sticky top-0 z-10 bg-background border-b">
                {tabs.map((tab) => (
                  <TabsTrigger 
                    key={tab.id} 
                    value={tab.id} 
                    className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="flex-1 overflow-auto mt-6">
                <TabsContent value="agent-info" className="mt-0">
                  <AgentInformationTab initialData={selectedVersionData} key={selectedVersionData?.id} />
                </TabsContent>

                <TabsContent value="agent-behavior" className="mt-0">
                  <AgentBehaviorTab initialData={selectedVersionData} key={selectedVersionData?.id} />
                </TabsContent>

                <TabsContent value="company-info" className="mt-0">
                  <CompanyInformationTab initialData={selectedVersionData} key={selectedVersionData?.id} />
                </TabsContent>

                <TabsContent value="system-prompt" className="mt-0">
                  <SystemPromptTab initialData={selectedVersionData} key={selectedVersionData?.id} />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        )}
      </div>

      {/* Version History Sidebar */}
      {showVersionHistory && (
        <VersionHistorySidebar
          agentId={agentData?.id || 1}
          currentVersion={currentVersion}
          onVersionSelect={handleVersionSelect}
          onRestoreVersion={handleRestoreVersion}
        />
      )}
    </div>
  );
}

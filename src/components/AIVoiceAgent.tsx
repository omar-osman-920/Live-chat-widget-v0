import { useState } from 'react';
import { Button } from './ui/button';
import { 
  Bot, 
  FileText, 
  Plus,
  MoreVertical,
  ChevronRight,
  ChevronDown,
  PanelLeftClose,
  PanelLeft,
  BookAudio,
  Settings,
  User,
  LogOut
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { ImageWithFallback } from './figma/ImageWithFallback';
import maqsamLogo from 'figma:asset/f10cf3176fac60bb7ba3a3cd0eafab6c9881d8a9.png';
import AgentsIndex from './ai-voice/AgentsIndex';
import KnowledgebasePanel from './ai-voice/KnowledgebasePanel';
import PronunciationDictionaryPanel from './ai-voice/PronunciationDictionaryPanel';
import { useLanguage } from '../contexts/LanguageContext';

export default function AIVoiceAgent() {
  const { t } = useLanguage();
  const [activePanel, setActivePanel] = useState('agents');
  const [expandedItems, setExpandedItems] = useState<string[]>(['agents']);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const sidebarItems = [
    { id: 'agents', label: t('sidebar.agents'), icon: Bot },
    { id: 'knowledgebase', label: t('sidebar.knowledgebase'), icon: FileText },
    { id: 'pronunciation', label: t('sidebar.pronunciation'), icon: BookAudio },
  ];

  const toggleExpanded = (id: string) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter(item => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  const handleItemClick = (id: string) => {
    setActivePanel(id);
    if (!expandedItems.includes(id)) {
      setExpandedItems([...expandedItems, id]);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleProfileClick = () => {
    console.log('Profile clicked');
    // Profile functionality will be implemented later
  };

  const handleSettingsClick = () => {
    console.log('Settings clicked');
    // Settings functionality will be implemented later
  };

  const handleLogoutClick = () => {
    console.log('Logout clicked');
    // Logout functionality will be implemented later
  };

  return (
    <div className="flex h-[calc(100vh-120px)] gap-6">
      {/* Left Sidebar */}
      <div className={`bg-white border border-border rounded-lg p-4 flex-shrink-0 transition-all duration-300 flex flex-col ${
        isSidebarCollapsed ? 'w-20' : 'w-64'
      }`}>
        <div className="space-y-4 flex-1">
          {/* Header with Company Logo and Name */}
          <div className="flex flex-col items-center pb-2 border-b gap-2">
            {isSidebarCollapsed ? (
              <>
                <div className="w-12 h-12 flex-shrink-0 rounded-md overflow-hidden bg-white p-1">
                  <img
                    src={maqsamLogo}
                    alt="Maqsam Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleSidebar}
                  className="h-6 w-6 p-0 flex-shrink-0"
                >
                  <PanelLeft className="w-3 h-3" />
                </Button>
              </>
            ) : (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 overflow-hidden">
                  <div className="flex-shrink-0 w-8 h-8 rounded-md overflow-hidden">
                    <img
                      src={maqsamLogo}
                      alt="Maqsam Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-semibold text-lg">{t('general.maqsam')}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleSidebar}
                  className="h-8 w-8 p-0 flex-shrink-0"
                >
                  <PanelLeftClose className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar Items */}
          <div className="space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isExpanded = expandedItems.includes(item.id);
              const isActive = activePanel === item.id;
              
              return (
                <div key={item.id}>
                  <button
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full flex items-center ${
                      isSidebarCollapsed ? 'justify-center px-3' : 'justify-start px-3'
                    } py-2.5 rounded-md transition-colors ${
                      isActive 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'hover:bg-accent text-foreground'
                    }`}
                    title={isSidebarCollapsed ? item.label : undefined}
                  >
                    <div className={`flex items-center ${isSidebarCollapsed ? '' : 'gap-3'} ${!isSidebarCollapsed ? 'w-full' : ''}`}>
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      {!isSidebarCollapsed && (
                        <span className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">{item.label}</span>
                      )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Settings Section - Bottom */}
        <div className="pt-4 border-t mt-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`w-full flex items-center ${
                  isSidebarCollapsed ? 'justify-center px-3' : 'justify-start px-3'
                } py-2.5 rounded-md transition-colors hover:bg-accent text-foreground`}
                title={isSidebarCollapsed ? 'Settings' : undefined}
              >
                <div className={`flex items-center ${isSidebarCollapsed ? '' : 'gap-3'}`}>
                  <Settings className="w-4 h-4" />
                  {!isSidebarCollapsed && (
                    <span className="text-sm">{t('general.settings')}</span>
                  )}
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={isSidebarCollapsed ? 'end' : 'start'} side="right" className="w-48">
              <DropdownMenuItem onClick={handleProfileClick}>
                <User className="w-4 h-4 mr-2" />
                {t('general.profile')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSettingsClick}>
                <Settings className="w-4 h-4 mr-2" />
                {t('general.settings')}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogoutClick}>
                <LogOut className="w-4 h-4 mr-2" />
                {t('general.logout')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        {activePanel === 'agents' && <AgentsIndex />}
        {activePanel === 'knowledgebase' && <KnowledgebasePanel />}
        {activePanel === 'pronunciation' && <PronunciationDictionaryPanel />}
      </div>
    </div>
  );
}

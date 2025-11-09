import AIVoiceAgent from './components/AIVoiceAgent';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { Button } from './components/ui/button';
import { Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './components/ui/dropdown-menu';

function AppContent() {
  const { language, setLanguage, t, dir } = useLanguage();

  return (
    <div className="min-h-screen bg-[#f8f9fa]" dir={dir}>
      {/* Language Switcher Bar */}
      <div className="bg-white border-b border-border px-6 py-3 flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Languages className="w-4 h-4" />
              {language === 'en' ? 'English' : 'العربية'}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setLanguage('en')}>
              English
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage('ar')}>
              العربية
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Main Content */}
      <main className="p-6">
        <AIVoiceAgent />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

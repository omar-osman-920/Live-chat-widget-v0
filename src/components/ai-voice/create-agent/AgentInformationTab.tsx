import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Label } from '../../ui/label';
import { Input } from '../../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Checkbox } from '../../ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group';
import { Switch } from '../../ui/switch';
import { useLanguage } from '../../../contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../../ui/dialog';
import { Play, Upload, Volume2, X, Plus, Download, FileText, Trash2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

const mockVoices = [
  {
    id: 1,
    name: 'Hadeel',
    gender: 'Female',
    languageCodes: ['ar', 'en'],
    languages: ['Arabic', 'English'],
    imageUrl: 'https://images.unsplash.com/photo-1625987306773-8b9e554b25e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhcmFiJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjIwODQ4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    name: 'Saif',
    gender: 'Male',
    languageCodes: ['ar', 'en'],
    languages: ['Arabic', 'English'],
    imageUrl: 'https://images.unsplash.com/photo-1633235806175-1ecc231f79d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhcmFiJTIwbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyMTU0NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    name: 'Shaker',
    gender: 'Male',
    languageCodes: ['ar'],
    languages: ['Arabic'],
    imageUrl: 'https://images.unsplash.com/photo-1610362556225-eac73c6d235d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiaWMlMjBtYW4lMjBidXNpbmVzcyUyMHN1aXR8ZW58MXx8fHwxNzYyMTU0NTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

interface LanguageDialect {
  language: string;
  languageName: string;
  dialects: string[];
}

interface PronunciationEntry {
  id: string;
  word: string;
  pronunciation: string;
}

interface LanguagePronunciationDict {
  language: string;
  languageName: string;
  entries: PronunciationEntry[];
}

interface UploadedPronunciationFile {
  id: string;
  name: string;
  size: number;
  uploadDate: Date;
}

const availableLanguages = [
  {
    code: 'en',
    name: 'English',
    dialects: [
      { code: 'us', name: 'US English' },
      { code: 'uk', name: 'UK English' },
      { code: 'au', name: 'Australian English' },
      { code: 'ca', name: 'Canadian English' },
      { code: 'in', name: 'Indian English' },
    ],
  },
  {
    code: 'es',
    name: 'Spanish',
    dialects: [
      { code: 'es', name: 'Spain Spanish' },
      { code: 'mx', name: 'Mexican Spanish' },
      { code: 'ar', name: 'Argentinian Spanish' },
    ],
  },
  {
    code: 'fr',
    name: 'French',
    dialects: [
      { code: 'fr', name: 'France French' },
      { code: 'ca', name: 'Canadian French' },
    ],
  },
  {
    code: 'de',
    name: 'German',
    dialects: [
      { code: 'de', name: 'Standard German' },
      { code: 'at', name: 'Austrian German' },
      { code: 'ch', name: 'Swiss German' },
    ],
  },
  {
    code: 'it',
    name: 'Italian',
    dialects: [
      { code: 'it', name: 'Standard Italian' },
    ],
  },
  {
    code: 'pt',
    name: 'Portuguese',
    dialects: [
      { code: 'pt', name: 'Portugal Portuguese' },
      { code: 'br', name: 'Brazilian Portuguese' },
    ],
  },
  {
    code: 'zh',
    name: 'Chinese',
    dialects: [
      { code: 'cn', name: 'Mandarin (Simplified)' },
      { code: 'tw', name: 'Mandarin (Traditional)' },
      { code: 'hk', name: 'Cantonese' },
    ],
  },
  {
    code: 'ja',
    name: 'Japanese',
    dialects: [
      { code: 'jp', name: 'Standard Japanese' },
    ],
  },
  {
    code: 'ar',
    name: 'Arabic',
    dialects: [
      { code: 'msa', name: 'Modern Standard Arabic' },
      { code: 'eg', name: 'Egyptian Arabic' },
      { code: 'lev', name: 'Levantine Arabic' },
      { code: 'gulf', name: 'Gulf Arabic' },
      { code: 'mg', name: 'Maghrebi Arabic' },
    ],
  },
];

const languagePlaceholders: Record<string, { word: string; pronunciation: string }> = {
  en: { word: 'API', pronunciation: 'A-P-I' },
  es: { word: 'México', pronunciation: 'Mé-hi-co' },
  fr: { word: 'Paris', pronunciation: 'Pa-ree' },
  de: { word: 'München', pronunciation: 'Mün-chen' },
  it: { word: 'Grazie', pronunciation: 'Gra-tsie' },
  pt: { word: 'São Paulo', pronunciation: 'Sow Pow-lo' },
  zh: { word: '北京', pronunciation: 'běi jīng' },
  ja: { word: '東京', pronunciation: 'とうきょう' },
  ar: { word: 'مرحبا', pronunciation: 'مَرْحَبًا' },
};

interface AgentInformationTabProps {
  initialData?: any;
}

export default function AgentInformationTab({ initialData }: AgentInformationTabProps) {
  const { t } = useLanguage();
  const [agentName, setAgentName] = useState(initialData?.agentName || '');
  const [tone, setTone] = useState(initialData?.tone || '');
  const [selectedLanguages, setSelectedLanguages] = useState<LanguageDialect[]>(
    initialData?.selectedLanguages || []
  );
  const [jobTitle, setJobTitle] = useState(initialData?.jobTitle || '');
  const [nationality, setNationality] = useState(initialData?.nationality || '');
  const [timeZone, setTimeZone] = useState(initialData?.timeZone || '');
  const [selectedVoice, setSelectedVoice] = useState<number | null>(initialData?.selectedVoice || null);
  const [showLanguageSelect, setShowLanguageSelect] = useState(false);
  const [useGlobalDictionary, setUseGlobalDictionary] = useState(initialData?.useGlobalDictionary || false);
  const [pendingLanguage, setPendingLanguage] = useState<string>('');

  // Auto-populate languages when voice is selected
  useEffect(() => {
    if (selectedVoice) {
      const voice = mockVoices.find(v => v.id === selectedVoice);
      if (voice) {
        // Auto-populate languages based on voice
        const languagesToAdd: LanguageDialect[] = voice.languageCodes.map(langCode => {
          const language = availableLanguages.find(l => l.code === langCode);
          return {
            language: langCode,
            languageName: language?.name || langCode,
            dialects: [],
          };
        });
        setSelectedLanguages(languagesToAdd);
      }
    }
  }, [selectedVoice]);
  
  // Pronunciation Dictionary states
  const [pronunciationDictionaries, setPronunciationDictionaries] = useState<LanguagePronunciationDict[]>(
    initialData?.pronunciationDictionaries || []
  );
  const [selectedDictLanguage, setSelectedDictLanguage] = useState<string>('');
  const [newWord, setNewWord] = useState('');
  const [newPronunciation, setNewPronunciation] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<UploadedPronunciationFile[]>(
    initialData?.uploadedPronunciationFiles || []
  );
  const [showUploadModal, setShowUploadModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addPronunciationEntry = () => {
    if (!selectedDictLanguage || !newWord.trim() || !newPronunciation.trim()) {
      return;
    }

    const language = availableLanguages.find(l => l.code === selectedDictLanguage);
    if (!language) return;

    const existingDict = pronunciationDictionaries.find(d => d.language === selectedDictLanguage);
    
    if (existingDict) {
      // Add to existing language dictionary
      setPronunciationDictionaries(
        pronunciationDictionaries.map(dict => {
          if (dict.language === selectedDictLanguage) {
            return {
              ...dict,
              entries: [
                ...dict.entries,
                {
                  id: Date.now().toString(),
                  word: newWord.trim(),
                  pronunciation: newPronunciation.trim(),
                },
              ],
            };
          }
          return dict;
        })
      );
    } else {
      // Create new language dictionary
      setPronunciationDictionaries([
        ...pronunciationDictionaries,
        {
          language: selectedDictLanguage,
          languageName: language.name,
          entries: [
            {
              id: Date.now().toString(),
              word: newWord.trim(),
              pronunciation: newPronunciation.trim(),
            },
          ],
        },
      ]);
    }

    // Clear inputs
    setNewWord('');
    setNewPronunciation('');
  };

  const removePronunciationEntry = (languageCode: string, entryId: string) => {
    setPronunciationDictionaries(
      pronunciationDictionaries.map(dict => {
        if (dict.language === languageCode) {
          const updatedEntries = dict.entries.filter(e => e.id !== entryId);
          return {
            ...dict,
            entries: updatedEntries,
          };
        }
        return dict;
      }).filter(dict => dict.entries.length > 0) // Remove empty dictionaries
    );
  };

  const removeLanguageDictionary = (languageCode: string) => {
    setPronunciationDictionaries(
      pronunciationDictionaries.filter(dict => dict.language !== languageCode)
    );
  };

  const downloadSampleFile = () => {
    // Create sample CSV data with English and Arabic examples
    const csvContent = [
      'Language,Word,Pronunciation',
      'English,API,A-P-I',
      'English,SQL,S-Q-L',
      'English,NGINX,Engine-X',
      'English,GIF,Jiff',
      'English,Cache,Cash',
      'Arabic,مرحبا,مَرْحَبًا',
      'Arabic,شكرا,شُكْرًا',
      'Arabic,السلام,السَّلَام',
      'Arabic,صباح,صَبَاح',
      'Arabic,مساء,مَسَاء',
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'pronunciation-dictionary-sample.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('Sample file downloaded successfully');
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const maxSize = 2 * 1024 * 1024; // 2 MB in bytes
    const allowedExtensions = ['csv', 'json'];
    
    Array.from(files).forEach((file) => {
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      
      // Validate file size
      if (file.size > maxSize) {
        toast.error(`File "${file.name}" exceeds 2 MB limit`);
        return;
      }
      
      // Validate file extension
      if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
        toast.error(`File "${file.name}" must be a CSV or JSON file`);
        return;
      }
      
      // Add file to uploaded files list
      const newFile: UploadedPronunciationFile = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        uploadDate: new Date(),
      };
      
      setUploadedFiles(prev => [...prev, newFile]);
      toast.success(`File "${file.name}" uploaded successfully`);
    });
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const deleteUploadedFile = (fileId: string) => {
    const file = uploadedFiles.find(f => f.id === fileId);
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
    if (file) {
      toast.success(`File "${file.name}" deleted`);
    }
  };

  const downloadUploadedFile = (fileId: string) => {
    const file = uploadedFiles.find(f => f.id === fileId);
    if (file) {
      // In a real implementation, this would download the actual file content
      // For now, we'll create a placeholder
      toast.success(`Downloading "${file.name}"`);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  const addLanguage = (languageCode: string) => {
    const language = availableLanguages.find(l => l.code === languageCode);
    if (language && !selectedLanguages.find(l => l.language === languageCode)) {
      setSelectedLanguages([
        ...selectedLanguages,
        {
          language: languageCode,
          languageName: language.name,
          dialects: [],
        },
      ]);
      setShowLanguageSelect(false);
      setPendingLanguage('');
    }
  };

  const removeLanguage = (languageCode: string) => {
    setSelectedLanguages(selectedLanguages.filter(l => l.language !== languageCode));
  };

  const toggleDialect = (languageCode: string, dialectCode: string) => {
    setSelectedLanguages(
      selectedLanguages.map(lang => {
        if (lang.language === languageCode) {
          // Single select: replace the dialect array with only the selected dialect
          return {
            ...lang,
            dialects: [dialectCode],
          };
        }
        return lang;
      })
    );
  };

  const getAvailableLanguages = () => {
    return availableLanguages.filter(
      lang => !selectedLanguages.find(sl => sl.language === lang.code)
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('agentInfo.title')}</CardTitle>
          <CardDescription>{t('agentInfo.subtitle')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>{t('agentInfo.agentName')}</Label>
                <Input 
                  placeholder={t('agentInfo.agentNamePlaceholder')}
                  value={agentName}
                  onChange={(e) => setAgentName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>{t('agentInfo.jobTitle')}</Label>
                <Input 
                  placeholder={t('agentInfo.jobTitlePlaceholder')}
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>{t('agentInfo.nationality')}</Label>
                <Input 
                  placeholder={t('agentInfo.nationalityPlaceholder')}
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('agentInfo.aiVoice')}</CardTitle>
          <CardDescription>{t('agentInfo.aiVoiceSubtitle')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>{t('agentInfo.voiceModel')}</Label>
              <Select
                value={selectedVoice?.toString()}
                onValueChange={(value) => setSelectedVoice(Number(value))}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t('agentInfo.selectVoice')} />
                </SelectTrigger>
                <SelectContent className="w-[500px]">
                  {mockVoices.map((voice) => (
                    <SelectItem 
                      key={voice.id} 
                      value={voice.id.toString()}
                      className="py-3"
                    >
                      <div className="flex items-center gap-3 w-full">
                        <img 
                          src={voice.imageUrl}
                          alt={voice.name}
                          className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <span className="font-medium flex-shrink-0">{voice.name}</span>
                          <Badge variant="secondary" className="flex-shrink-0">
                            {voice.gender}
                          </Badge>
                          {voice.languages.map((lang, idx) => (
                            <Badge key={idx} variant="outline" className="flex-shrink-0">
                              {lang}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedVoice && (() => {
              const voice = mockVoices.find(v => v.id === selectedVoice);
              if (!voice) return null;
              
              return (
                <div className="p-4 border rounded-lg bg-secondary/30">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Volume2 className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4>{voice.name}</h4>
                        <p className="text-sm text-muted-foreground">{voice.gender}</p>
                      </div>
                    </div>
                    <Button variant="default" size="sm" className="gap-2">
                      <Play className="w-4 h-4" />
                      {t('agentInfo.listen')}
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Supported Languages:</p>
                      <div className="flex flex-wrap gap-1">
                        {voice.languages.map((lang, idx) => (
                          <span key={idx} className="text-xs bg-background px-2 py-1 rounded border">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Languages and Dialects Section */}
            <div className="space-y-3">
              {/* Selected Languages with Dialects */}
              {selectedLanguages.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  {t('agentInfo.selectDialect')}
                </p>
              )}

              {selectedLanguages.length > 0 && (
                <div className="space-y-3">
                  {selectedLanguages.map((selectedLang) => {
                    const languageData = availableLanguages.find(
                      l => l.code === selectedLang.language
                    );
                    if (!languageData) return null;

                    return (
                      <div key={selectedLang.language} className="space-y-2">
                        <Label>{selectedLang.languageName} {t('agentInfo.dialect')}</Label>
                        <Select
                          value={selectedLang.dialects[0] || ''}
                          onValueChange={(value) => toggleDialect(selectedLang.language, value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder={t('agentInfo.selectVoice')} />
                          </SelectTrigger>
                          <SelectContent>
                            {languageData.dialects.map((dialect) => (
                              <SelectItem key={dialect.code} value={dialect.code}>
                                {dialect.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('agentInfo.pronunciationDict')}</CardTitle>
          <CardDescription>
            {t('agentInfo.pronunciationSubtitle')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg bg-secondary/30">
            <div className="space-y-1">
              <Label>{t('agentInfo.useGlobalDict')}</Label>
              <p className="text-sm text-muted-foreground">
                {t('agentInfo.useGlobalDictDesc')}
              </p>
            </div>
            <Switch
              checked={useGlobalDictionary}
              onCheckedChange={setUseGlobalDictionary}
            />
          </div>

          {useGlobalDictionary && (
            <div className="flex items-start gap-2 p-3 border rounded-lg bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
              <div className="mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
              </div>
              <p className="text-sm text-blue-900 dark:text-blue-200">
                {t('agentInfo.customEntriesNote')}
              </p>
            </div>
          )}

          <div className="space-y-4">
            {/* Upload File Section */}
            <div className="p-4 border rounded-lg bg-card space-y-4">
              <div className="flex items-center justify-between">
                <Label>{t('agentInfo.uploadDictFile')}</Label>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={downloadSampleFile}
                  >
                    <Download className="w-4 h-4" />
                    {t('agentInfo.downloadSample')}
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="gap-2"
                    onClick={() => setShowUploadModal(true)}
                  >
                    <Upload className="w-4 h-4" />
                    {t('agentInfo.uploadFile')}
                  </Button>
                </div>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept=".csv,.json"
                multiple
                onChange={handleFileUpload}
                className="hidden"
              />

              {/* Display Uploaded Files */}
              {uploadedFiles.length > 0 && (
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">{t('agentInfo.uploadedFiles')}</Label>
                  <div className="space-y-2">
                    {uploadedFiles.map((file) => (
                      <div
                        key={file.id}
                        className="flex items-center justify-between p-3 border rounded-lg bg-background hover:bg-secondary/30 transition-colors"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <FileText className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm truncate">{file.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {formatFileSize(file.size)} • {new Date(file.uploadDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => downloadUploadedFile(file.id)}
                            title={t('agentInfo.downloadFile')}
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteUploadedFile(file.id)}
                            title={t('agentInfo.deleteFile')}
                          >
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Add New Entry Section */}
            <div className="p-4 border rounded-lg bg-card space-y-4">
              <Label>{t('agentInfo.addPronunciationEntry')}</Label>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">{t('agentInfo.language')}</Label>
                  <Select
                    value={selectedDictLanguage}
                    onValueChange={setSelectedDictLanguage}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t('agentInfo.selectLanguage')} />
                    </SelectTrigger>
                    <SelectContent>
                      {availableLanguages.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                          {lang.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">{t('agentInfo.word')}</Label>
                  <Input
                    placeholder={
                      selectedDictLanguage && languagePlaceholders[selectedDictLanguage]
                        ? `e.g., ${languagePlaceholders[selectedDictLanguage].word}`
                        : t('agentInfo.selectLanguageFirst')
                    }
                    value={newWord}
                    onChange={(e) => setNewWord(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addPronunciationEntry();
                      }
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">{t('agentInfo.pronunciation')}</Label>
                  <Input
                    placeholder={
                      selectedDictLanguage && languagePlaceholders[selectedDictLanguage]
                        ? `e.g., ${languagePlaceholders[selectedDictLanguage].pronunciation}`
                        : t('agentInfo.selectLanguageFirst')
                    }
                    value={newPronunciation}
                    onChange={(e) => setNewPronunciation(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addPronunciationEntry();
                      }
                    }}
                  />
                </div>
              </div>

              <Button
                onClick={addPronunciationEntry}
                disabled={!selectedDictLanguage || !newWord.trim() || !newPronunciation.trim()}
                className="gap-2"
                size="sm"
              >
                <Plus className="w-4 h-4" />
                {t('agentInfo.addEntry')}
              </Button>
            </div>

            {/* Display Entries Grouped by Language */}
            {pronunciationDictionaries.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-4">
                {t('agentInfo.noPronunciations')}
              </p>
            )}

            {pronunciationDictionaries.length > 0 && (
              <div className="space-y-4">
                {pronunciationDictionaries.map((dict) => (
                  <div
                    key={dict.language}
                    className="border rounded-lg overflow-hidden"
                  >
                    <div className="bg-secondary/50 px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h4>{dict.languageName}</h4>
                        <Badge variant="secondary">
                          {dict.entries.length} {dict.entries.length === 1 ? t('agentInfo.entry') : t('agentInfo.entries')}
                        </Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeLanguageDictionary(dict.language)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="divide-y">
                      {dict.entries.map((entry) => (
                        <div
                          key={entry.id}
                          className="px-4 py-3 flex items-center justify-between hover:bg-secondary/30 transition-colors"
                        >
                          <div className="grid grid-cols-2 gap-8 flex-1">
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">{t('agentInfo.word')}</p>
                              <p>{entry.word}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">{t('agentInfo.pronunciation')}</p>
                              <code className="text-sm bg-secondary px-2 py-1 rounded">
                                {entry.pronunciation}
                              </code>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removePronunciationEntry(dict.language, entry.id)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Upload File Modal */}
      <Dialog open={showUploadModal} onOpenChange={setShowUploadModal}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Upload Pronunciation Dictionary File</DialogTitle>
            <DialogDescription>
              Review the file requirements before uploading
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex items-start gap-2 p-4 border rounded-lg bg-muted/50">
              <div className="mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <p className="font-medium text-foreground">File Requirements:</p>
                <ul className="list-disc list-inside space-y-0.5 ml-2">
                  <li>Maximum file size: 2 MB</li>
                  <li>Accepted formats: CSV, JSON</li>
                </ul>
              </div>
            </div>
            <div className="p-4 border rounded-lg bg-accent/50">
              <p className="text-sm text-muted-foreground">
                Need a template? Click "Download Sample" to get a CSV file with example pronunciation entries.
              </p>
            </div>
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="outline"
              onClick={() => setShowUploadModal(false)} className="px-[16px] py-[8px]"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                setShowUploadModal(false);
                fileInputRef.current?.click();
              }}
              className="gap-2 px-[12px] py-[8px] mt-[0px] mr-[0px] mb-[0px] ml-[10px]"
            >
              <Upload className="w-1 h-4" />
              Choose File
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

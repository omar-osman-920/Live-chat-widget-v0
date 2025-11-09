import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Label } from '../../ui/label';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Badge } from '../../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { Play, Upload, Volume2, X } from 'lucide-react';

const mockVoices = [
  {
    id: 1,
    name: 'Sarah',
    type: 'Professional',
    gender: 'Female',
    languages: ['English (US)', 'English (UK)'],
    accent: 'American',
  },
  {
    id: 2,
    name: 'Michael',
    type: 'Classy',
    gender: 'Male',
    languages: ['English (US)', 'English (UK)'],
    accent: 'British',
  },
  {
    id: 3,
    name: 'Emma',
    type: 'Casual',
    gender: 'Female',
    languages: ['English (US)', 'English (AU)'],
    accent: 'Australian',
  },
  {
    id: 4,
    name: 'David',
    type: 'Intense',
    gender: 'Male',
    languages: ['English (US)'],
    accent: 'American',
  },
  {
    id: 5,
    name: 'Olivia',
    type: 'Friendly',
    gender: 'Female',
    languages: ['English (US)', 'English (CA)'],
    accent: 'Canadian',
  },
  {
    id: 6,
    name: 'James',
    type: 'Warm',
    gender: 'Male',
    languages: ['English (UK)', 'English (IE)'],
    accent: 'Irish',
  },
];

interface AgentVoiceTabProps {
  initialData?: any;
}

export default function AgentVoiceTab({ initialData }: AgentVoiceTabProps) {
  const [selectedVoice, setSelectedVoice] = useState<number | null>(initialData?.selectedVoice || null);
  const [uploadedFile, setUploadedFile] = useState<string | null>(initialData?.uploadedFile || null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file.name);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Select Voice</CardTitle>
          <CardDescription>Choose a voice model for your AI agent</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Voice Model</Label>
              <Select
                value={selectedVoice?.toString()}
                onValueChange={(value) => setSelectedVoice(Number(value))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a voice" />
                </SelectTrigger>
                <SelectContent className="w-[500px]">
                  {mockVoices.map((voice) => (
                    <SelectItem 
                      key={voice.id} 
                      value={voice.id.toString()}
                      className="py-3"
                    >
                      <div className="flex items-center gap-3 w-full">
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Volume2 className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <span className="font-medium flex-shrink-0">{voice.name}</span>
                          <span className="text-sm text-muted-foreground flex-shrink-0">{voice.accent}</span>
                          <span className="text-sm text-muted-foreground flex-shrink-0">{voice.type}</span>
                          <span className="text-sm text-muted-foreground flex-shrink-0">{voice.gender}</span>
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
                        <p className="text-sm text-muted-foreground">{voice.accent}</p>
                      </div>
                    </div>
                    <Button variant="default" size="sm" className="gap-2">
                      <Play className="w-4 h-4" />
                      Preview
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{voice.type}</Badge>
                      <Badge variant="secondary">{voice.gender}</Badge>
                    </div>
                    
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
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pronunciation Dictionary</CardTitle>
          <CardDescription>
            Upload a custom pronunciation dictionary to help the AI pronounce specific words correctly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Upload Dictionary File</Label>
            <div className="flex items-center gap-4">
              <Input
                type="file"
                accept=".csv,.json"
                onChange={handleFileUpload}
                className="hidden"
                id="pronunciation-file"
              />
              <label htmlFor="pronunciation-file">
                <Button variant="outline" className="gap-2" asChild>
                  <span>
                    <Upload className="w-4 h-4" />
                    Choose File
                  </span>
                </Button>
              </label>
              {uploadedFile && (
                <div className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-md">
                  <span className="text-sm">{uploadedFile}</span>
                  <button
                    onClick={() => setUploadedFile(null)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Supported formats: CSV, JSON. Maximum file size: 5MB
            </p>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <h4 className="mb-2">File Format Example (CSV)</h4>
            <pre className="text-xs bg-background p-3 rounded border overflow-x-auto">
              {`word,pronunciation\nAcme,"ak-mee"\nSQL,"ess-que-el"\nAPI,"ay-pee-eye"`}
            </pre>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <h4 className="mb-2">File Format Example (JSON)</h4>
            <pre className="text-xs bg-background p-3 rounded border overflow-x-auto">
              {`{\n  "Acme": "ak-mee",\n  "SQL": "ess-que-el",\n  "API": "ay-pee-eye"\n}`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Plus, Play, Volume2 } from 'lucide-react';

const mockVoices = [
  {
    id: 1,
    name: 'Professional Female',
    language: 'English (US)',
    provider: 'Azure',
    type: 'Neural',
  },
  {
    id: 2,
    name: 'Friendly Male',
    language: 'English (US)',
    provider: 'Google',
    type: 'Neural',
  },
  {
    id: 3,
    name: 'Technical Male',
    language: 'English (UK)',
    provider: 'Amazon',
    type: 'Neural',
  },
  {
    id: 4,
    name: 'Conversational Female',
    language: 'English (AU)',
    provider: 'Azure',
    type: 'Neural',
  },
];

export default function VoicesPanel() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl">Voices</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage voice models for your AI agents
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Voice
        </Button>
      </div>

      {/* Voices Grid */}
      <div className="grid grid-cols-2 gap-4">
        {mockVoices.map((voice) => (
          <Card key={voice.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Volume2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3>{voice.name}</h3>
                    <p className="text-sm text-muted-foreground">{voice.language}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Play className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{voice.provider}</Badge>
                <Badge variant="secondary">{voice.type}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

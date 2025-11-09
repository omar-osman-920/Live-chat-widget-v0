import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { 
  Plus, 
  Upload, 
  Download, 
  Search, 
  MoreVertical,
  Pencil,
  Trash2,
  FileText
} from 'lucide-react';
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
import { Badge } from '../ui/badge';
import { useLanguage } from '../../contexts/LanguageContext';

interface DictionaryEntry {
  id: string;
  fileName: string;
  fileSize: number; // in bytes
  dateAdded: string;
}

const mockDictionaries: DictionaryEntry[] = [
  {
    id: '1',
    fileName: 'pronunciation-dict-v1.csv',
    fileSize: 2458,
    dateAdded: '2024-01-15',
  },
  {
    id: '2',
    fileName: 'custom-words.json',
    fileSize: 15420,
    dateAdded: '2024-01-15',
  },
  {
    id: '3',
    fileName: 'technical-terms.csv',
    fileSize: 8934,
    dateAdded: '2024-02-20',
  },
  {
    id: '4',
    fileName: 'brand-names.json',
    fileSize: 3256,
    dateAdded: '2024-02-22',
  },
  {
    id: '5',
    fileName: 'abbreviations.csv',
    fileSize: 12048,
    dateAdded: '2024-01-15',
  },
];

// Utility function to format file size
function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

export default function PronunciationDictionaryPanel() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [dictionaries, setDictionaries] = useState<DictionaryEntry[]>(mockDictionaries);

  const filteredDictionaries = dictionaries.filter(dict =>
    dict.fileName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('Uploading dictionary file:', file.name);
      // Handle file upload logic here
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl">{t('pd.title')}</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {t('pd.subtitle')}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            {t('pd.export')}
          </Button>
          <Input
            type="file"
            accept=".csv,.json"
            onChange={handleFileUpload}
            className="hidden"
            id="upload-dictionary"
          />
          <label htmlFor="upload-dictionary">
            <Button variant="outline" className="gap-2" asChild>
              <span>
                <Upload className="w-4 h-4" />
                {t('pd.import')}
              </span>
            </Button>
          </label>
        </div>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle>{t('pd.uploadedFiles')}</CardTitle>
          <CardDescription>
            {t('pd.uploadedFilesDesc')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder={t('pd.searchFiles')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            {/* Table */}
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('pd.fileName')}</TableHead>
                    <TableHead>{t('pd.size')}</TableHead>
                    <TableHead>{t('pd.uploadDate')}</TableHead>
                    <TableHead className="w-[70px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDictionaries.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                        {t('pd.noFiles')}
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredDictionaries.map((entry) => (
                      <TableRow key={entry.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-muted-foreground" />
                            <span>{entry.fileName}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-muted-foreground">
                            {formatFileSize(entry.fileSize)}
                          </span>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {new Date(entry.dateAdded).toLocaleDateString()}
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
                                <Download className="w-4 h-4 mr-2" />
                                {t('pd.download')}
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="w-4 h-4 mr-2" />
                                {t('pd.delete')}
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

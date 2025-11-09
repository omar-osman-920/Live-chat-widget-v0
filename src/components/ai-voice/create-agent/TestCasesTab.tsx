import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';
import { Button } from '../../ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';
import { Plus, Trash2 } from 'lucide-react';

interface TestCase {
  id: number;
  question: string;
  expectedAnswer: string;
  successCriteria: string;
  failureCriteria: string;
}

interface TestCaseSection {
  id: string;
  title: string;
  description: string;
  testCases: TestCase[];
}

interface TestCasesTabProps {
  initialData?: any;
}

export default function TestCasesTab({ initialData }: TestCasesTabProps) {
  const [sections, setSections] = useState<TestCaseSection[]>(initialData?.testCaseSections || [
    {
      id: 'within-kb',
      title: 'Questions within Knowledge Base Scope',
      description: 'Questions that should be answered using the knowledge base',
      testCases: [],
    },
    {
      id: 'similar-kb',
      title: 'Questions Similar to Business Area',
      description: 'Questions outside KB but related to company\'s business area',
      testCases: [],
    },
    {
      id: 'general',
      title: 'General Questions',
      description: 'Questions unrelated to knowledge base or business area',
      testCases: [],
    },
    {
      id: 'behavioral',
      title: 'Behavioral Questions',
      description: 'Questions testing agent behavior and response patterns',
      testCases: [],
    },
  ]);

  const addTestCase = (sectionId: string) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          testCases: [
            ...section.testCases,
            {
              id: Date.now(),
              question: '',
              expectedAnswer: '',
              successCriteria: '',
              failureCriteria: '',
            },
          ],
        };
      }
      return section;
    }));
  };

  const removeTestCase = (sectionId: string, testCaseId: number) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          testCases: section.testCases.filter(tc => tc.id !== testCaseId),
        };
      }
      return section;
    }));
  };

  const updateTestCase = (
    sectionId: string,
    testCaseId: number,
    field: keyof TestCase,
    value: string
  ) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          testCases: section.testCases.map(tc =>
            tc.id === testCaseId ? { ...tc, [field]: value } : tc
          ),
        };
      }
      return section;
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Test Scenarios</CardTitle>
          <CardDescription>
            Create test cases to validate your AI agent's responses across different scenarios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {sections.map((section) => (
              <AccordionItem key={section.id} value={section.id}>
                <AccordionTrigger>
                  <div className="flex items-center justify-between w-full pr-4">
                    <div className="text-left">
                      <h4>{section.title}</h4>
                      <p className="text-sm text-muted-foreground">{section.description}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {section.testCases.length} test case{section.testCases.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-4">
                    {section.testCases.map((testCase, index) => (
                      <Card key={testCase.id}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base">
                              Test Case {index + 1}
                            </CardTitle>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeTestCase(section.id, testCase.id)}
                            >
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <Label>Caller Question</Label>
                            <Textarea
                              value={testCase.question}
                              onChange={(e) =>
                                updateTestCase(section.id, testCase.id, 'question', e.target.value)
                              }
                              placeholder="What would the caller ask?"
                              rows={2}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Expected AI Agent Answer</Label>
                            <Textarea
                              value={testCase.expectedAnswer}
                              onChange={(e) =>
                                updateTestCase(section.id, testCase.id, 'expectedAnswer', e.target.value)
                              }
                              placeholder="What should the AI agent respond?"
                              rows={3}
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>Success Criteria</Label>
                              <Textarea
                                value={testCase.successCriteria}
                                onChange={(e) =>
                                  updateTestCase(section.id, testCase.id, 'successCriteria', e.target.value)
                                }
                                placeholder="What defines a successful response?"
                                rows={3}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label>Failure Criteria</Label>
                              <Textarea
                                value={testCase.failureCriteria}
                                onChange={(e) =>
                                  updateTestCase(section.id, testCase.id, 'failureCriteria', e.target.value)
                                }
                                placeholder="What defines a failed response?"
                                rows={3}
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                    <Button
                      variant="outline"
                      className="w-full gap-2"
                      onClick={() => addTestCase(section.id)}
                    >
                      <Plus className="w-4 h-4" />
                      Add Test Case
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}

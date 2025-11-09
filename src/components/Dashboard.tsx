import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Info, Settings } from 'lucide-react';

const timelineData = [
  { date: '13 Oct', inbound: 120, outbound: 100 },
  { date: '14 Oct', inbound: 170, outbound: 140 },
  { date: '15 Oct', inbound: 90, outbound: 80 },
  { date: '16 Oct', inbound: 140, outbound: 110 },
  { date: '17 Oct', inbound: 100, outbound: 90 },
  { date: '18 Oct', inbound: 110, outbound: 95 },
  { date: '19 Oct', inbound: 130, outbound: 120 },
  { date: '20 Oct', inbound: 95, outbound: 85 },
  { date: '21 Oct', inbound: 75, outbound: 65 },
];

const distributionData = [
  { day: 'Sun', inbound: 60, outbound: 40 },
  { day: 'Mon', inbound: 150, outbound: 100 },
  { day: 'Tue', inbound: 170, outbound: 150 },
  { day: 'Wed', inbound: 180, outbound: 160 },
  { day: 'Thu', inbound: 70, outbound: 50 },
  { day: 'Fri', inbound: 80, outbound: 60 },
  { day: 'Sat', inbound: 50, outbound: 30 },
];

const metrics = [
  { label: 'Inbound Count', value: '495', info: true },
  { label: 'Dropped Rate', value: '60.81%', info: true },
  { label: 'Avg. Handle Time', value: '01:09', info: true },
  { label: 'Avg. Wait Time', value: '00:06', info: true },
  { label: 'Avg. Abandon Time', value: '00:06', info: true },
  { label: 'Within Service Level', value: '4', info: true },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Get insights into call metrics, average wait times, and call durations on the dashboard
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-muted-foreground">2025-10-13 00:00:00</div>
          <div className="text-sm text-muted-foreground">2025-10-20 23:58:59</div>
        </div>
      </div>

      {/* Calls Insight */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Calls Insight</CardTitle>
            <div className="flex items-center gap-2">
              <Select defaultValue="all-agents">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-agents">All Agents</SelectItem>
                  <SelectItem value="agent-1">Agent 1</SelectItem>
                  <SelectItem value="agent-2">Agent 2</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-groups">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-groups">All Groups</SelectItem>
                  <SelectItem value="group-1">Group 1</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-numbers">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-numbers">All Numbers</SelectItem>
                  <SelectItem value="number-1">Number 1</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            {/* Calls Timeline */}
            <div>
              <h3 className="mb-4">Calls Timeline</h3>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={timelineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="inbound" stackId="1" stroke="#ef4444" fill="#fca5a5" fillOpacity={0.6} name="Inbound" />
                  <Area type="monotone" dataKey="outbound" stackId="1" stroke="#3b82f6" fill="#93c5fd" fillOpacity={0.6} name="Outbound" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Calls Distribution */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3>Calls Distribution</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Days</Button>
                  <Button variant="ghost" size="sm">Hours</Button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={distributionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="inbound" fill="#3b82f6" name="Inbound" />
                  <Bar dataKey="outbound" fill="#ef4444" name="Outbound" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metrics */}
      <div className="flex items-center justify-end mb-2">
        <Button variant="outline" size="sm" className="gap-2">
          <Settings className="w-4 h-4" />
          Customize Metrics (16)
        </Button>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm text-muted-foreground">{metric.label}</span>
                {metric.info && <Info className="w-4 h-4 text-muted-foreground" />}
              </div>
              <div className="text-2xl">{metric.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

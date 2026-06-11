import { useState } from 'react'
import { Button } from './components/ui/Button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/ui/Card'
import { Input } from './components/ui/Input'
import { Badge } from './components/ui/Badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/Tabs'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './components/ui/Dialog'
import { CommandPalette } from './components/ui/CommandPalette'
import { ForgeButton } from './components/ui/ForgeButton'
import { Hammer, Zap, Target, Play, Square, ArrowRight, Github } from 'lucide-react'

interface Template {
  id: string
  title: string
  description: string
  archetype: string
  preview: React.ReactNode
}

function App() {
  const [activeTemplate, setActiveTemplate] = useState<Template | null>(null)
  const [commandOpen, setCommandOpen] = useState(false)
  const [surface, setSurface] = useState<'raw' | 'clean'>('raw')

  const templates: Template[] = [
    {
      id: 'saas',
      title: 'SaaS Landing',
      description: 'Modern product landing with hero, features, pricing, and CTA.',
      archetype: 'SaaS / Startup',
      preview: (
        <div className="space-y-6 p-4">
          <div className="text-center">
            <div className="font-pixel text-2xl tracking-[3px] mb-2">ACME FORGE</div>
            <p className="text-[var(--brut-text-muted)]">The rawest way to build tools.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1,2,3].map(i => (
              <Card key={i} surface={surface} className="p-4">
                <div className="font-pixel text-sm mb-2">Feature {i}</div>
                <div className="text-xs text-[var(--brut-text-muted)]">Description of powerful capability</div>
              </Card>
            ))}
          </div>
          <ForgeButton className="w-full">Start Free Trial</ForgeButton>
        </div>
      )
    },
    {
      id: 'dashboard',
      title: 'Tool Dashboard',
      description: 'Dense data interface with logs, metrics, and controls.',
      archetype: 'Internal Tool / Dashboard',
      preview: (
        <div className="space-y-4">
          <div className="flex gap-4">
            <Card surface={surface} className="flex-1 p-4">
              <div className="text-xs text-[var(--brut-text-muted)]">ACTIVE SEED</div>
              <div className="font-mono text-xl">0xA3F2B1</div>
            </Card>
            <Card surface={surface} className="flex-1 p-4">
              <div className="text-xs text-[var(--brut-text-muted)]">PREGNANCE</div>
              <div className="font-mono text-xl text-[var(--brut-accent)]">87%</div>
            </Card>
          </div>
          <Card surface={surface} className="p-4">
            <div className="font-pixel text-sm mb-3">RECENT ACTIVITY</div>
            <div className="space-y-2 text-sm font-mono">
              <div>07:42 • SIGIL FORGED</div>
              <div>07:41 • PREGNANCE UPDATED</div>
            </div>
          </Card>
        </div>
      )
    },
    {
      id: 'docs',
      title: 'Documentation Site',
      description: 'Clean docs layout with sidebar navigation and content.',
      archetype: 'Docs / Knowledge Base',
      preview: (
        <div className="flex gap-4 text-sm">
          <div className="w-1/3 space-y-1">
            <div className="font-pixel text-xs tracking-widest mb-2">GETTING STARTED</div>
            <div>Installation</div>
            <div>Quick Start</div>
            <div className="font-pixel text-xs tracking-widest mt-3 mb-2">COMPONENTS</div>
            <div>Button</div>
            <div>Card</div>
          </div>
          <div className="flex-1 border-l border-[var(--brut-border)] pl-4">
            <div className="font-pixel text-sm mb-2">Installation</div>
            <div className="font-mono text-xs bg-[var(--brut-bg)] p-2">npm install brut8</div>
          </div>
        </div>
      )
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'Creative showcase with project grid and case studies.',
      archetype: 'Portfolio / Creative',
      preview: (
        <div>
          <div className="font-pixel text-xl tracking-[2px] mb-4">SELECTED WORK</div>
          <div className="grid grid-cols-2 gap-4">
            {[1,2].map(i => (
              <Card key={i} surface={surface} className="p-4">
                <div className="aspect-video bg-[var(--brut-panel-alt)] mb-3" />
                <div className="font-pixel text-sm">PROJECT {i}</div>
              </Card>
            ))}
          </div>
        </div>
      )
    }
  ]

  const commandItems = [
    { id: '1', label: 'View Components', description: 'Browse the full component library', onSelect: () => window.scrollTo({ top: 800, behavior: 'smooth' }) },
    { id: '2', label: 'Open Template Gallery', description: 'See example website templates', onSelect: () => window.scrollTo({ top: 1200, behavior: 'smooth' }) },
    { id: '3', label: 'Read the Thesis', description: 'Understand the design philosophy', onSelect: () => window.scrollTo({ top: 400, behavior: 'smooth' }) },
    { id: '4', label: 'GitHub Repository', description: 'View source on GitHub', onSelect: () => window.open('https://github.com/HarrowHaus/brut8', '_blank') },
  ]

  return (
    <div className="brut8-demo brut8-root min-h-screen bg-[var(--brut-bg)] text-[var(--brut-text)]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b-2 border-[var(--brut-border)] bg-[var(--brut-panel)] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[var(--brut-accent)] flex items-center justify-center border-2 border-[var(--brut-accent-dark)]">
              <Hammer className="w-4 h-4 text-white" />
            </div>
            <div className="font-pixel text-xl tracking-[3px]">BRUT8</div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-mono">
            <a href="#templates" className="hover:text-[var(--brut-accent)]">Templates</a>
            <a href="#playground" className="hover:text-[var(--brut-accent)]">Playground</a>
            <a href="#docs" className="hover:text-[var(--brut-accent)]">Docs</a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setCommandOpen(true)}
            className="hidden md:flex items-center gap-2"
          >
            <span>⌘K</span> Command
          </Button>
          <Button 
            variant="accent" 
            size="sm" 
            onClick={() => window.open('https://github.com/HarrowHaus/brut8', '_blank')}
          >
            <Github className="w-4 h-4 mr-2" /> GitHub
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-block mb-4 px-4 py-1 border-2 border-[var(--brut-border)] text-xs font-mono tracking-[2px]">
          RAW PIXEL UI KIT v0.2
        </div>
        
        <h1 className="font-pixel text-6xl md:text-7xl tracking-[6px] mb-6">
          BRUT8
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-[var(--brut-text-muted)] mb-10">
          Interfaces that feel <span className="text-[var(--brut-accent)]">forged</span>, not designed.<br />
          A raw brutalist pixel system for people who build real things.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ForgeButton size="lg" onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}>
            EXPLORE TEMPLATES
          </ForgeButton>
          <Button 
            variant="ghost" 
            size="lg"
            onClick={() => setCommandOpen(true)}
          >
            OPEN COMMAND PALETTE <span className="ml-2">⌘K</span>
          </Button>
        </div>
      </div>

      {/* Philosophy */}
      <div className="max-w-4xl mx-auto px-6 pb-16 text-center">
        <div className="font-pixel text-sm tracking-[3px] mb-4 text-[var(--brut-accent)]">THE THESIS</div>
        <p className="text-lg text-[var(--brut-text-muted)]">
          Most UI kits chase polish. Brut8 embraces rawness. Thick borders. Inset depth. 
          Honest construction marks. Built for operators who spend hours inside their tools.
        </p>
      </div>

      {/* Template Gallery */}
      <div id="templates" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="font-pixel text-3xl tracking-[3px]">TEMPLATE GALLERY</div>
            <p className="text-[var(--brut-text-muted)] mt-2">Archetypal websites, built live with Brut8 components.</p>
          </div>
          <Badge variant="accent">INTERACTIVE</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template) => (
            <Card 
              key={template.id} 
              surface={surface} 
              className="cursor-pointer group hover:border-[var(--brut-accent)] transition-colors"
              onClick={() => setActiveTemplate(template)}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{template.title}</CardTitle>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardDescription>{template.archetype}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--brut-text-muted)] mb-4">{template.description}</p>
                <div className="text-xs font-mono text-[var(--brut-accent)]">CLICK TO PREVIEW →</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Interactive Playground */}
      <div id="playground" className="bg-[var(--brut-panel)] border-y-2 border-[var(--brut-border)] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="font-pixel text-3xl tracking-[3px] mb-2">INTERACTIVE PLAYGROUND</div>
            <p className="text-[var(--brut-text-muted)]">Live components. Real interactions. No fluff.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card surface={surface} className="p-8">
              <div className="space-y-6">
                <div>
                  <div className="font-pixel text-xs tracking-widest mb-2">SURFACE MODE</div>
                  <div className="flex gap-2">
                    <Button 
                      variant={surface === 'raw' ? 'accent' : 'ghost'} 
                      size="sm"
                      onClick={() => setSurface('raw')}
                    >
                      RAW
                    </Button>
                    <Button 
                      variant={surface === 'clean' ? 'accent' : 'ghost'} 
                      size="sm"
                      onClick={() => setSurface('clean')}
                    >
                      CLEAN
                    </Button>
                  </div>
                </div>

                <ForgeButton className="w-full" onClick={() => setCommandOpen(true)}>
                  OPEN COMMAND PALETTE
                </ForgeButton>

                <div className="text-center text-xs text-[var(--brut-text-muted)]">
                  Press ⌘K anywhere to open the command palette
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Docs Section */}
      <div id="docs" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="font-pixel text-3xl tracking-[3px]">DOCUMENTATION</div>
          <p className="text-[var(--brut-text-muted)] mt-2">Get started in under 2 minutes.</p>
        </div>

        <Tabs defaultValue="install">
          <TabsList className="mb-6">
            <TabsTrigger value="install">Installation</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
          </TabsList>

          <TabsContent value="install">
            <Card surface={surface} className="p-6">
              <pre className="font-mono text-sm bg-[var(--brut-bg)] p-4 overflow-x-auto">
{`npm install brut8

# or copy components directly from GitHub`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="usage">
            <Card surface={surface} className="p-6">
              Import any component and use the <code>surface</code> prop.
            </Card>
          </TabsContent>

          <TabsContent value="components">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              {['Button', 'Card', 'Input', 'Tabs', 'Dialog', 'CommandPalette', 'ForgeButton', 'VisualizationWrapper'].map(name => (
                <div key={name} className="brut-panel p-3 font-mono text-xs">{name}</div>
              ))}
            </div>
          </TabsContent>
        </TabsContent>
      </TabsContent>

      {/* Footer */}
      <footer className="border-t-2 border-[var(--brut-border)] py-8 text-center text-xs font-mono text-[var(--brut-text-muted)]">
        Built with Brut8 • Raw by design • <a href="https://github.com/HarrowHaus/brut8" className="hover:text-[var(--brut-accent)]">View on GitHub</a>
      </footer>

      {/* Template Preview Modal */}
      <Dialog open={!!activeTemplate} onOpenChange={() => setActiveTemplate(null)}>
        <DialogContent className="max-w-3xl">
          {activeTemplate && (
            <>
              <DialogHeader>
                <DialogTitle className="font-pixel tracking-[2px]">{activeTemplate.title}</DialogTitle>
                <DialogDescription>{activeTemplate.description}</DialogDescription>
              </DialogHeader>
              <div className="mt-4 border border-[var(--brut-border)] p-6 bg-[var(--brut-bg)]">
                {activeTemplate.preview}
              </div>
              <div className="text-xs text-[var(--brut-text-muted)] mt-4">
                This is a live preview using actual Brut8 components.
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Command Palette */}
      <CommandPalette 
        open={commandOpen} 
        onOpenChange={setCommandOpen} 
        items={commandItems}
      />
    </div>
  )
}

export default App
import { Container } from "@/components/ui/Container";
import { PageShell } from "@/components/ui/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";
import { GridBackground } from "@/components/ui/GridBackground";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { Reveal } from "@/components/ui/Reveal";

export default function DesignSystemPage() {
  return (
    <PageShell className="relative min-h-screen py-24 pb-48">
      <GridBackground variant="fine" />
      <NoiseOverlay />
      
      <Container className="space-y-32">
        <header>
          <TechnicalLabel className="mb-4">SYSTEM / v0.1</TechnicalLabel>
          <h1 className="text-display mb-4">Design System</h1>
          <p className="text-body-lg">
            XR Developer Portfolio framework. A collection of reusable components, tokens, and technical visual language.
          </p>
        </header>

        <section>
          <SectionHeading subtitle="01 / TYPOGRAPHY">Typography Scale</SectionHeading>
          <div className="space-y-8 max-w-4xl">
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
              <span className="text-technical w-32 shrink-0">Display</span>
              <span className="text-display truncate">Cinematic scale</span>
            </div>
            <Divider />
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
              <span className="text-technical w-32 shrink-0">Heading 1</span>
              <span className="text-h1">Spatial Identity</span>
            </div>
            <Divider />
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
              <span className="text-technical w-32 shrink-0">Heading 2</span>
              <span className="text-h2">Section Headers</span>
            </div>
            <Divider />
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
              <span className="text-technical w-32 shrink-0">Body Large</span>
              <p className="text-body-lg">Used for introductory paragraphs and prominent descriptions. The text uses an off-white color for comfortable reading.</p>
            </div>
            <Divider />
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
              <span className="text-technical w-32 shrink-0">Body</span>
              <p className="text-body">Standard reading text. It should feel editorial yet technical. Used for project descriptions and general content.</p>
            </div>
            <Divider />
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
              <span className="text-technical w-32 shrink-0">Technical</span>
              <span className="text-technical">XR / 001 // SYSTEM_ONLINE</span>
            </div>
          </div>
        </section>

        <section>
          <SectionHeading subtitle="02 / COLORS">Color Tokens</SectionHeading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-24 rounded-md bg-background border border-border"></div>
              <p className="text-caption">Background</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-md bg-surface border border-border"></div>
              <p className="text-caption">Surface</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-md bg-surface-elevated border border-border"></div>
              <p className="text-caption">Surface Elevated</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-md bg-accent"></div>
              <p className="text-caption text-accent">Accent (Cyan)</p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeading subtitle="03 / BUTTONS">Button System</SectionHeading>
          <div className="flex flex-wrap gap-6 items-center">
            <Button variant="primary">Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="text">View Project</Button>
            <Button variant="primary" disabled>Disabled State</Button>
          </div>
        </section>

        <section>
          <SectionHeading subtitle="04 / CARDS & SURFACES">Surface System</SectionHeading>
          <Reveal>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <TechnicalLabel className="mb-4">PROJECT_01</TechnicalLabel>
                <h3 className="text-h3 mb-2">Outdoor AR System</h3>
                <p className="text-body mb-6">An augmented reality system for placing and visualizing large-scale 3D models in outdoor environments with high precision.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Unity</Badge>
                  <Badge>ARCore</Badge>
                  <Badge>C#</Badge>
                </div>
              </Card>
              <Card>
                <TechnicalLabel className="mb-4">EXPERIENCE</TechnicalLabel>
                <h3 className="text-h3 mb-2">AgroCast Analytics</h3>
                <p className="text-body-sm text-accent mb-6">XR Developer • Present</p>
                <p className="text-body">Developing extended reality solutions and interactive 3D environments.</p>
              </Card>
            </div>
          </Reveal>
        </section>
      </Container>
    </PageShell>
  );
}

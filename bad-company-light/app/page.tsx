import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/avatar.png" alt="Bad Company" />
              <AvatarFallback>BC</AvatarFallback>
            </Avatar>
            <span className="text-xl font-bold tracking-tight">Bad Company</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#mission" className="hover:text-primary transition-colors">Mission</a>
            <a href="#manifesto" className="hover:text-primary transition-colors">Manifesto</a>
            <a href="#score" className="hover:text-primary transition-colors">Bad Score</a>
            <a href="#team" className="hover:text-primary transition-colors">Team</a>
          </nav>
          <a
            href="mailto:hello@badcompany.org"
            className={cn(buttonVariants({ size: "sm" }))}
          >
            Get Involved
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="section-padding container mx-auto px-4 md:px-8 text-center pt-32 md:pt-40">
        <div className="mx-auto max-w-4xl space-y-8">
          <Avatar className="mx-auto h-28 w-28 border-4 border-primary shadow-lg">
            <AvatarImage src="/avatar.png" alt="Bad Company" />
            <AvatarFallback>BC</AvatarFallback>
          </Avatar>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight lg:text-7xl">
              Transparency is a <span className="text-primary">Consumer Right</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We expose the truth behind corporate narratives. Rigorous scores. Verified sources. Accountability now.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#mission"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Discover Our Mission
            </a>
            <a
              href="#score"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Explore The Bad Score
            </a>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Most people do not know who they are really buying from. Companies control their own narrative. They choose what to highlight, what to soften, and what to leave buried.
              </p>
              <p className="mt-4 text-2xl font-semibold text-primary">Bad Company exists to fix that.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="text-4xl mb-2">⚖️</div>
                  <CardTitle>Truth over Comfort</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We prioritise facts over corporate spin, even when it&apos;s uncomfortable. No sugar-coating, no PR smoothing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="text-4xl mb-2">🎯</div>
                  <CardTitle>Action over Discussion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We build tools that put information in front of people at the moment it matters. Not later. Now.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="text-4xl mb-2">🔬</div>
                  <CardTitle>Rigour over Rhetoric</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every score defensible. Every source validated. Every claim grounded in evidence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section id="manifesto" className="section-padding container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The Manifesto</h2>
          </div>

          <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8 px-8 md:px-12">
              <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed mb-8 text-foreground">
                &ldquo;The information needed to hold companies accountable already exists. It just needs to be found, structured, and put in front of people at the moment it matters.&rdquo;
              </blockquote>

              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  We believe a small, well-organised team with the right data and the right tools can build something that changes how millions of people make decisions.
                </p>
                <p>
                  We know the companies we&apos;ll score have lawyers, PR teams, and lobbyists whose entire job is to manage their narrative. The only answer is rigour.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarImage src="/avatar.png" alt="Gru" />
                  <AvatarFallback>GR</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Gru</p>
                  <p className="text-sm text-muted-foreground">Chief of Staff, Bad Company</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bad Score */}
      <section id="score" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">The Bad Score</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A rigorous, six-dimensional assessment of corporate transparency and accountability. No fluff. Just evidence.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "📊", title: "Data Rigour", desc: "Sources validated, methodology transparent, numbers auditable." },
                { icon: "🔍", title: "Narrative Control", desc: "Do they shape the story or hide behind marketing?" },
                { icon: "⚡", title: "Accountability", desc: "Do they own their mistakes or bury them?" },
                { icon: "🌍", title: "Impact", desc: "Real-world consequences vs public perception." },
                { icon: "📜", title: "Compliance", desc: "Legal minimum vs ethical leadership." },
                { icon: "🗣️", title: "Stakeholder Voice", desc: "Do customers, employees, and communities have a say?" },
              ].map((dim, idx) => (
                <Card key={idx} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-4xl">{dim.icon}</div>
                    <CardTitle className="text-xl">{dim.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{dim.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-padding container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A small, dedicated group building something that matters.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Craig Hepburn", role: "Founder, Strategy & Vision", initials: "CH" },
              { name: "Upendra Shardanand", role: "DC Collaborator, Democracy Funding & Strategic Partnerships", initials: "US" },
              { name: "Kerry", role: "CMO", initials: "KY" },
              { name: "Connor Hepburn", role: "Lead Developer, Technical Build", initials: "CH" },
            ].map((member, idx) => (
              <Card key={idx} className="text-center hover:border-primary transition-colors">
                <CardHeader className="flex flex-col items-center">
                  <Avatar className="h-20 w-20 mb-4">
                    <AvatarImage src={`/placeholder-avatar-${idx + 1}.png`} alt={member.name} />
                    <AvatarFallback className="text-lg">{member.initials}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">Join the Movement</h2>
            <p className="text-xl opacity-90">
              Bad Company is more than a product — it&apos;s a statement. If you believe transparency is a consumer right, we want to hear from you.
            </p>
            <a
              href="mailto:hello@badcompany.org"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 md:px-8 py-12">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/avatar.png" alt="Bad Company" />
                <AvatarFallback>BC</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">Bad Company</p>
                <p className="text-sm text-muted-foreground">Transparency is a consumer right</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Bad Company. Built with rigour. Backed by evidence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
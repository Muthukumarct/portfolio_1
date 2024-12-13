import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Smartphone, Server, Layout, Shield } from "lucide-react";

const skills = {
  mobile: {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform expertise",
    items: [
      { name: "iOS (Swift/SwiftUI)", level: 95 },
      { name: "Android (Kotlin)", level: 90 },
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 80 },
    ],
  },
  backend: {
    icon: Server,
    title: "Backend Integration",
    description: "Server-side technologies and APIs",
    items: [
      { name: "RESTful APIs", level: 90 },
      { name: "GraphQL", level: 85 },
      { name: "Firebase", level: 92 },
      { name: "AWS Mobile", level: 88 },
    ],
  },
  frontend: {
    icon: Layout,
    title: "UI/UX Design",
    description: "Creating beautiful user interfaces",
    items: [
      { name: "Mobile UI Design", level: 88 },
      { name: "Animation", level: 85 },
      { name: "Prototyping", level: 90 },
      { name: "Design Systems", level: 87 },
    ],
  },
  security: {
    icon: Shield,
    title: "App Security",
    description: "Securing mobile applications",
    items: [
      { name: "Data Encryption", level: 92 },
      { name: "Authentication", level: 95 },
      { name: "App Privacy", level: 90 },
      { name: "Security Testing", level: 88 },
    ],
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With a comprehensive skill set in mobile development, I bring ideas to life
            through clean code and exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <Card key={key}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
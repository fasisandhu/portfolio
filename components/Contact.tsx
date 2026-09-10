import { profile } from "@/content";
import SectionHead from "./SectionHead";
import { ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const year = new Date().getFullYear();

export default function Contact() {
  return (
    <>
      <section id="contact" className="section">
        <div className="shell">
          <SectionHead label="Contact" />
          <div data-reveal>
            <p className="display-sm max-w-[22ch]">{profile.contactLine}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <MailIcon className="h-4 w-4" />
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <p className="mono mt-9 text-[0.8125rem] text-dim">{profile.location}</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-line py-8">
        <div className="shell flex flex-wrap items-center justify-between gap-3">
          <span className="label">
            © {year} {profile.name}
          </span>
          <span className="label">Next.js · Vercel</span>
        </div>
      </footer>
    </>
  );
}

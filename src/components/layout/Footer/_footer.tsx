import { SocialLinks } from "../../ui/socials/socialLinks"

export const Footer = () => {
  return (
    <footer className="bg-void text-white text-center w-full px-4 mt-12">
      <section>
        
      </section>
      <section>

      </section>
      <section className="flex items-center justify-between gap-2">
        <SocialLinks small={true} className="flex items-center justify-center gap-6 mb-4" iconClassName=" text-white" />
        <p className="text-sm">&copy; {new Date().getFullYear()} Ario. All rights reserved.</p>
      </section>
    </footer>
  )
}
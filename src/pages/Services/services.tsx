import { PackageData } from "./data"
export const Services = () => {
  return (
    <main>
      <section aria-label="Lets Work Together - Header">
        <h1> Let's Work Together </h1>
      </section>
      <section aria-label="Services Packages & Pricing"> 
        <h2> Services</h2>
        <div>
          <h3>Packages</h3>
          TOP
          <p>
            Not sure which package fits?  <br/>
            Prices shown are estimates and every project is unique. Reach out before getting started and we'll figure out exactly what you need. 
          </p>
        </div>
        <div>
         {PackageData.map(pkg => (
  <div key={pkg.title}>
    <h3>{pkg.title}</h3>
    <p>{pkg.price}</p>
    <ul>
      {pkg.includes.map(item => <li key={item}>{item}</li>)}
    </ul>
    {pkg.techStack && (
      <div className="tech-badges">
        {pkg.techStack.map(tech => (
          <span key={tech} className="text-red-500 badge">{tech} </span>
        ))}
      </div>
    )}
  </div>
))}
        </div>
      </section>
    </main>
  )
}
// == Benefits of Custom web development ==
// - improved security against common vulnerabilities and bot attacks. No wordpress, shopify or wix target bots attacking your website.
// - better performance and faster load times. No bloated code, plugins or themes slowing down your website.
// - more flexibility and scalability. Custom code can be easily modified and expanded as your business grows and evolves.
// - better SEO and user experience. Custom code can be optimized for search engines and provide a unique and engaging experience for your visitors.
// - better integration with third-party services and APIs. Custom code can be designed to seamlessly integrate with other tools and platforms you use for your business.
// - more control over the design and functionality of your website. Custom code allows you to create a website that truly reflects your brand and meets your specific needs.
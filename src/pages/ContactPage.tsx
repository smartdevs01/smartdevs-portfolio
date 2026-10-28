import Contact from '@/components/Contact';
import PageHeader from '@/components/PageHeader';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function ContactPage() {
  usePageMeta('Contact', 'Send Smartdevs a message about a question, idea, or collaboration.');

  return (
    <section className="section-pad relative pt-40 md:pt-44">
      <div className="container-px">
        <PageHeader
          eyebrow="Contact"
          title={
            <>
              Let's <span className="text-gold-gradient">build something.</span>
            </>
          }
          description="Have a question, an idea, or just want to connect? Send a message below, or reach me directly by email."
        />
        <div className="mt-16">
          <Contact />
        </div>
      </div>
    </section>
  );
}

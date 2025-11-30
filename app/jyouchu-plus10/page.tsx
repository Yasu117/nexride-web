import Header from '@/components/jyouchu-plus10/Header';
import Hero from '@/components/jyouchu-plus10/Hero';
import GuaranteeConditions from '@/components/jyouchu-plus10/GuaranteeConditions';
import Features from '@/components/jyouchu-plus10/Features';
import SuccessStories from '@/components/jyouchu-plus10/SuccessStories';
import JobList from '@/components/jyouchu-plus10/JobList';
import FAQ from '@/components/jyouchu-plus10/FAQ';
import Flow from '@/components/jyouchu-plus10/Flow';
import ContactForm from '@/components/jyouchu-plus10/ContactForm';
import Footer from '@/components/jyouchu-plus10/Footer';

export default function EnJyouChuPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Header />
            <Hero />
            <GuaranteeConditions />
            <Features />
            <SuccessStories />
            <JobList />
            <FAQ />
            <Flow />
            <ContactForm />
            <Footer />
        </main>
    );
}

import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function TermsOfService() {
   return (
      <>
         <main className="min-h-screen bg-[var(--primary)] text-[var(--secondary)] px-12 py-14">
            <section className="max-w-4xl mx-auto">
               <header>
                  <Link href="/" className="flex mb-6">
                     <MoveLeft size={32}/>
                  </Link>
                  <h1 className="font-gambarino text-5xl mb-8">Terms of Service</h1>
                  <p className="text-lg mb-8 text-gray-600">Effective Date: August 7, 2025</p>
               </header>

               <section className="space-y-8">
                  <div>
                     <h2 className="font-gambarino text-3xl mb-4">1. Introduction</h2>
                     <p className="text-[17px] leading-relaxed mb-4">
                        These terms of service govern your use of Pamirò Restaurant's services, including dining, reservations, and our website.
                     </p>
                     <p className="text-[17px] leading-relaxed">
                        By using our services, you agree to these terms. If you do not agree, please do not use our services.
                     </p>
                  </div>

                  <div>
                     <h2 className="font-gambarino text-3xl mb-4">2. Reservations</h2>
                     <ul className="list-disc list-inside space-y-2 text-[17px]">
                        <li>Reservations are subject to availability and confirmation</li>
                        <li>Please arrive within 15 minutes of your reservation time</li>
                        <li>Late arrivals may result in table reassignment</li>
                        <li>Cancellations must be made at least 2 hours in advance</li>
                        <li>No-shows may be subject to a cancellation fee</li>
                     </ul>
                  </div>

                  <div>
                     <h2 className="font-gambarino text-3xl mb-4">3. Payment and Pricing</h2>
                     <ul className="list-disc list-inside space-y-2 text-[17px]">
                        <li>All prices are listed in Euros and include applicable taxes</li>
                        <li>Payment is due at the time of service</li>
                        <li>We accept cash, credit cards, and digital payments</li>
                        <li>Menu prices are subject to change without notice</li>
                        <li>Service charges may apply for large groups</li>
                     </ul>
                  </div>

                  <div>
                     <h2 className="font-gambarino text-3xl mb-4">4. Food and Dietary Requirements</h2>
                     <ul className="list-disc list-inside space-y-2 text-[17px]">
                        <li>Please inform us of any allergies or dietary restrictions when making reservations</li>
                        <li>While we take care to accommodate dietary needs, we cannot guarantee allergen-free preparation</li>
                        <li>Menu items and ingredients may vary based on seasonal availability</li>
                        <li>Special dietary requests may require advance notice</li>
                     </ul>
                  </div>

                  <div>
                     <h2 className="font-gambarino text-3xl mb-4">5. Conduct and Dress Code</h2>
                     <ul className="list-disc list-inside space-y-2 text-[17px]">
                        <li>Smart casual dress code is recommended</li>
                        <li>Disruptive behavior may result in removal from the premises</li>
                        <li>Smoking is prohibited inside the restaurant</li>
                        <li>Photography is welcome, but please be respectful of other guests</li>
                     </ul>
                  </div>

                  <div>
                     <h2 className="font-gambarino text-3xl mb-4">6. Liability</h2>
                     <p className="text-[17px] leading-relaxed mb-4">
                        Pamirò Restaurant's liability is limited to the cost of your meal. We are not responsible for:
                     </p>
                     <ul className="list-disc list-inside space-y-2 text-[17px]">
                        <li>Personal belongings left on the premises</li>
                        <li>Injuries resulting from customer negligence</li>
                        <li>Delays due to circumstances beyond our control</li>
                     </ul>
                  </div>

                  <div>
                     <h2 className="font-gambarino text-3xl mb-4">7. Website Use</h2>
                     <ul className="list-disc list-inside space-y-2 text-[17px]">
                        <li>Our website is for informational and reservation purposes</li>
                        <li>You may not use our website for any illegal activities</li>
                        <li>Content on our website is protected by copyright</li>
                        <li>We reserve the right to modify or discontinue website features</li>
                     </ul>
                  </div>

                  <div>
                     <h2 className="font-gambarino text-3xl mb-4">8. Intellectual Property</h2>
                     <p className="text-[17px] leading-relaxed">
                        All restaurant branding, menu designs, and recipes are the property of Pamirò Restaurant. Unauthorized use is prohibited.
                     </p>
                  </div>

                  <div>
                     <h2 className="font-gambarino text-3xl mb-4">9. Changes to Terms</h2>
                     <p className="text-[17px] leading-relaxed">
                        These terms may be updated occasionally. Changes will be posted on this page with a new effective date. Continued use of our services indicates acceptance of updated terms.
                     </p>
                  </div>
               </section>
            </section>
         </main>
         <Footer />
      </>
   )
}

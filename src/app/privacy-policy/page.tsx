import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function PrivacyPolicy() {
   return (
      <>
         <main className="min-h-screen bg-[var(--primary)] text-[var(--secondary)] px-6 sm:px-12 py-14">
            <section className="max-w-4xl mx-auto">
               <header>
                  <Link href="/" className="flex mb-6">
                     <MoveLeft size={32}/>
                  </Link>
                  <h1 className="font-gambarino text-4xl sm:text-5xl mb-6 sm:mb-8">Privacy Policy</h1>
                  <p className="text-[15px] sm:text-lg mb-6 sm:mb-8 text-gray-600">Effective Date: August 7, 2025</p>
               </header>

               <section className="space-y-6 sm:space-y-8">
                  <div>
                     <h2 className="font-gambarino text-2xl sm:text-3xl mb-3 sm:mb-4">1. Introduction</h2>
                     <p className="text-[15px] sm:text-[17px] mb-3 sm:mb-4 leading-relaxed">
                        This privacy policy explains how Pamirò Restaurant collects, uses, and protects your personal information when you visit our restaurant, make reservations, or use our website.
                     </p>
                     <p className="text-[15px] sm:text-[17px] leading-relaxed">
                        By using our services, you agree to the practices described in this policy.
                     </p>
                  </div>

                  <div>
                     <h2 className="font-gambarino text-2xl sm:text-3xl mb-3 sm:mb-4">2. Information We Collect</h2>
                     <ul className="list-disc list-inside space-y-2 text-[15px] sm:text-[17px] leading-relaxed">
                        <li>Your name, phone number, and email address for reservations</li>
                        <li>Dining preferences and special dietary requirements</li>
                        <li>Payment information for processing transactions</li>
                        <li>Feedback and reviews you provide</li>
                     </ul>
                  </div>

                  <div>
                     <h2 className="font-gambarino text-2xl sm:text-3xl mb-3 sm:mb-4">3. How We Use Your Information</h2>
                     <ul className="list-disc list-inside space-y-2 text-[15px] sm:text-[17px] leading-relaxed">
                        <li>Process and confirm your restaurant reservations</li>
                        <li>Provide better dining experiences based on your preferences</li>
                        <li>Send you updates about special offers and events</li>
                        <li>Process payments securely</li>
                        <li>Improve our restaurant services</li>
                     </ul>
                  </div>

                  <div>
                     <h2 className="font-gambarino text-2xl sm:text-3xl mb-3 sm:mb-4">4. Information Sharing</h2>
                     <p className="text-[15px] sm:text-[17px] mb-3 sm:mb-4 leading-relaxed">
                        Pamirò Restaurant does not sell or share your personal information with third parties, except:
                     </p>
                     <ul className="list-disc list-inside space-y-2 text-[15px] sm:text-[17px] leading-relaxed">
                        <li>When required by law</li>
                        <li>With payment processors to handle transactions</li>
                        <li>With your explicit permission</li>
                     </ul>
                  </div>

                  <div>
                     <h2 className="font-gambarino text-2xl sm:text-3xl mb-3 sm:mb-4">5. Data Security</h2>
                     <p className="text-[15px] sm:text-[17px] leading-relaxed">
                        Your personal information is protected using industry-standard security measures. However, no internet transmission is completely secure, so we cannot guarantee absolute security.
                     </p>
                  </div>

                  <div>
                     <h2 className="font-gambarino text-2xl sm:text-3xl mb-3 sm:mb-4">6. Your Rights</h2>
                     <p className="text-[15px] sm:text-[17px] mb-3 sm:mb-4 leading-relaxed">You have the right to:</p>
                     <ul className="list-disc list-inside space-y-2 text-[15px] sm:text-[17px] leading-relaxed">
                        <li>Access your personal information</li>
                        <li>Correct any inaccurate information</li>
                        <li>Request deletion of your data</li>
                        <li>Opt out of marketing communications</li>
                     </ul>
                  </div>

                  <div>
                     <h2 className="font-gambarino text-2xl sm:text-3xl mb-3 sm:mb-4">7. Cookies</h2>
                     <p className="text-[15px] sm:text-[17px] leading-relaxed">
                        Our website uses cookies to improve your browsing experience. You can disable cookies in your browser settings if you prefer.
                     </p>
                  </div>

                  <div>
                     <h2 className="font-gambarino text-2xl sm:text-3xl mb-3 sm:mb-4">8. Data Retention</h2>
                     <p className="text-[15px] sm:text-[17px] leading-relaxed">
                        Reservation information is kept for 2 years for operational purposes. Other data is deleted when no longer needed.
                     </p>
                  </div>

                  <div>
                     <h2 className="font-gambarino text-2xl sm:text-3xl mb-3 sm:mb-4">9. Policy Updates</h2>
                     <p className="text-[15px] sm:text-[17px] leading-relaxed">
                        This privacy policy may be updated occasionally. Changes will be posted on this page with a new effective date.
                     </p>
                  </div>
               </section>
            </section>
         </main>
      </>
   )
}
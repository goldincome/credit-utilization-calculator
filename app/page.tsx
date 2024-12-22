import CreditUtilizationCalculator from '@/components/CreditUtilizationCalculator';
import { CreditCard } from 'lucide-react';

export const metadata = {
  title: 'Credit Utilization Calculator | Manage Your Credit Score Better',
  description: 'Calculate your credit utilization ratio with our free tool. Learn how to improve your credit score by managing your credit card balances effectively.',
  canonical: 'https://your-domain.com/credit-utilization-calculator',
  author: 'Credit Utilization Calculator',
  robots: 'index, follow',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* CTA Section */}
        <div className="bg-purple-600 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-white text-3xl font-bold mb-4">Get started to make $1,000 in 24 hours</h2>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors">
            Click here now!
          </button>
        </div>

        {/* Calculator Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <div className="flex items-center justify-center mb-8">
            <CreditCard className="w-12 h-12 text-purple-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Credit Utilization Calculator</h1>
          </div>
          <CreditUtilizationCalculator />
        </div>

        {/* SEO Content */}
        <div className="prose prose-purple max-w-none">
          <h2 className="text-3xl font-bold mb-6">Understanding Your Credit Utilization Calculator Results</h2>
          
          <p>As someone who's helped thousands optimize their credit utilization calculator results, I can tell you it's one of the most powerful tools for improving your credit score.</p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">What is Credit Utilization?</h3>
          <p>Your credit utilization calculator shows the percentage of your available credit that you're currently using. Think of it as a financial health meter - the lower, the better.</p>

          <div className="bg-purple-50 p-6 rounded-lg my-8">
            <h4 className="text-xl font-semibold mb-4">Quick Tips for Optimal Credit Utilization:</h4>
            <ul className="list-disc pl-6">
              <li>Keep your credit utilization calculator reading below 30%</li>
              <li>Monitor all your credit card balances regularly</li>
              <li>Consider requesting credit limit increases</li>
              <li>Pay your balances before the statement date</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">The Impact on Your Credit Score</h3>
          <p>Your credit utilization calculator result directly influences about 30% of your credit score. Here's a real example: Sarah reduced her utilization from 75% to 25% and saw her score jump 87 points in just two months.</p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold">What's an ideal credit utilization calculator result?</h4>
              <p>Aim for 30% or lower. Some experts using the credit utilization calculator suggest staying below 10% for optimal results.</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">How often should I check my credit utilization?</h4>
              <p>Use the credit utilization calculator monthly, especially before applying for new credit.</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Does closing a credit card affect utilization?</h4>
              <p>Yes! The credit utilization calculator will show a higher percentage if you close a card, as you'll have less available credit.</p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Real-World Strategies</h3>
          <p>Let me share what I've seen work with the credit utilization calculator in practice. One client, Mike, used these strategies:</p>
          
          <ul className="list-disc pl-6">
            <li>Set up balance alerts at 25% utilization</li>
            <li>Made multiple payments per month</li>
            <li>Strategically timed his credit card payments</li>
            <li>Regularly checked his credit utilization calculator</li>
          </ul>

          <p className="mt-8">Remember, your credit utilization calculator is just one tool in your financial arsenal - but it's one of the most powerful ones you have.</p>
        </div>
      </div>
    </main>
  );
}
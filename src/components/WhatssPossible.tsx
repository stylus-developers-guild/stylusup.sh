import { Coins, Gamepad2, Code, Network, Lock, Wrench, Shield, Bot } from 'lucide-react';

const useCases = [
  {
    icon: Code,
    title: 'Development Tools & SDKs',
    description: 'Blazing fast tooling and frameworks to build, test, and deploy Stylus smart contracts with zero setup.',
    packages: [
      { name: 'scaffold-stylus', url: 'https://github.com/rkdud007/scaffold-stylus' },
      { name: 'stylus-by-example', url: 'https://github.com/OffchainLabs/stylus-by-example' },
      { name: 'wizard', url: 'https://thewizard.app/' },
      { name: 'bobcat-sdk', url: 'https://github.com/stylus-developers-guild/bobcat-sdk' },
      { name: 'assemblyscript-sdk', url: 'https://as-stylus.wakeuplabs.io' },
    ],
  },
  {
    icon: Coins,
    title: 'DeFi Protocols',
    description: 'Build high-performance DeFi applications with complex mathematical operations at a fraction of the gas cost.',
    packages: [
      { name: '9lives.so', url: 'https://9lives.so' },
      { name: 'orderbookkit.xyz', url: 'https://code.markovgeist.org/orderbookkit.xyz/dir' },
      { name: 'renegade', url: 'https://github.com/renegade-fi/renegade-stylus-contracts' },
      { name: 'fairblock/debid', url: 'https://github.com/Fairblock/DeBid' },
    ],
  },
  {
    icon: Bot,
    title: 'AI-Assisted Development',
    description: 'Leverage AI to generate Stylus contracts, port existing codebases, and answer ecosystem questions.',
    packages: [
      { name: 'claude-code-skill', url: 'https://github.com/hummusonrails/arbitrum-dapp-skill' },
      { name: 'sifter (fairAI)', url: 'https://siftstylus.xyz/' },
      { name: 'openzeppelin-mcp', url: 'https://mcp.openzeppelin.com/' },
    ],
  },
  {
    icon: Lock,
    title: 'Advanced Cryptography',
    description: 'Implement cutting-edge cryptographic primitives and zero-knowledge proofs with Rust\'s crypto ecosystem.',
    packages: [
      { name: 'ed25519-dalek', url: 'https://github.com/fluidity-money/superposition-precompiles' },
      { name: 'secp256k1', url: 'https://github.com/rust-bitcoin/rust-secp256k1' },
      { name: 'bulletproofs', url: 'https://github.com/dalek-cryptography/bulletproofs' },
    ],
  },
  {
    icon: Shield,
    title: 'Security & Verification',
    description: 'Battle-tested contract standards, property testing, and WASM bytecode fuzzing.',
    packages: [
      { name: 'openzeppelin-stylus', url: 'https://github.com/OpenZeppelin/rust-contracts-stylus' },
      { name: 'solang-stylus', url: 'https://github.com/trail-of-forks/solang' },
      { name: 'scribe-fuzz', url: 'https://kframework.org' },
    ],
  },
  {
    icon: Wrench,
    title: 'Developer Experience',
    description: 'Compile, debug, and trace execution with enhanced tooling across the Solidity/Stylus boundary.',
    packages: [
      { name: 'cargo-stylus', url: 'https://github.com/OffchainLabs/cargo-stylus-walnut' },
      { name: 'arbos-foundry', url: 'https://github.com/iosiro/arbos-foundry' },
      { name: 'walnut-stylusdb', url: 'https://github.com/walnuthq/stylusdb' },
      { name: 'codetracer', url: 'https://www.github.com/metacraft-labs/codetracer' },
    ],
  },
];

export function WhatsPossible() {
  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            What's possible with Stylus
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Use Stylus for a variety of smart contract development purposes
          </p>
        </div>

        {/* Use cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`w-full border border-gray-200 rounded-xl p-6 hover:border-[#5F4DED] hover:shadow-lg transition-all group relative overflow-hidden`}
              style={
                index === 0
                  ? {
                    backgroundImage: 'url(/images/RocketBG.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }
                  : index === 1
                    ? {
                      backgroundImage: 'url(/images/BlockBG.svg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }
                    : index === 2
                      ? {
                        backgroundImage: 'url(/images/LockBG.svg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }
                      : index === 3
                        ? {
                          backgroundImage: 'url(/images/CryptographyBG.svg)',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }
                        : index === 4
                          ? {
                            backgroundImage: 'url(/images/BridgeBG.svg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }
                          : index === 5
                            ? {
                              backgroundImage: 'url(/images/GamesBG.svg)',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                            }
                            : {}
              }
            >
              {/* Icon and title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5F4DED]/10 to-[#7B68EE]/10 border border-[#5F4DED]/20 flex items-center justify-center flex-shrink-0">
                  <useCase.icon className="w-6 h-6 text-[#5F4DED]" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-2">
                    {useCase.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {useCase.description}
              </p>

              {/* Popular packages */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-xs text-gray-500">Popular Packages:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {useCase.packages.map((pkg, pkgIndex) => (
                    <a
                      key={pkgIndex}
                      href={pkg.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-2.5 py-1 rounded-md bg-[#FF1F8F]/10 text-[#FF1F8F] hover:bg-[#FF1F8F]/20 border border-[#FF1F8F]/20 hover:border-[#FF1F8F]/40 transition-all"
                    >
                      {pkg.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Learn more link - disabled */}
              <button
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#FF1F8F] transition-colors mt-4 group-hover:gap-3 cursor-not-allowed opacity-50"
                disabled
              >
                Learn More
                <svg className="w-4 h-4 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

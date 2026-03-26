export interface Resource {
  name: string;
  url: string;
  description?: string;
}

export interface Category {
  title: string;
  resources: Resource[];
  comingSoon?: boolean;
}

export const resourceCategories = {
  learn: [
    {
      title: 'Education platforms',
      resources: [
        {
          name: 'Arbitrum Docs',
          url: 'https://docs.arbitrum.io/stylus/stylus-gentle-introduction',
          description: 'Official Stylus documentation'
        },
        {
          name: 'Stylus By Example',
          url: 'https://github.com/OffchainLabs/stylus-by-example',
          description: 'Learn Stylus through practical examples'
        },
        {
          name: 'OpenZeppelin Stylus Docs',
          url: 'https://docs.openzeppelin.com/contracts-stylus',
          description: 'Audited contract library documentation'
        }
      ]
    },
    {
      title: 'Tutorials',
      resources: [
        {
          name: 'Quick Start Guide',
          url: 'https://docs.arbitrum.io/stylus/stylus-quickstart',
          description: 'Get started in minutes'
        },
        {
          name: 'Stylus Tutorials',
          url: 'https://github.com/OffchainLabs/stylus-tutorials',
          description: 'Official tutorial repository'
        },
        {
          name: 'Awesome Stylus',
          url: 'https://github.com/OffchainLabs/awesome-stylus',
          description: 'Curated list of resources and examples'
        },
        {
          name: 'AI & Stylus Blog',
          url: 'https://blog.arbitrum.foundation/ai-and-stylus-the-builders-new-toolkit/',
          description: 'AI-assisted development with Stylus'
        }
      ]
    },
    {
      title: 'SDKs',
      resources: [
        {
          name: 'Stylus Rust SDK (v0.10)',
          url: 'https://github.com/OffchainLabs/stylus-sdk-rs',
          description: 'Write smart contracts in Rust'
        },
        {
          name: 'Stylus C/C++ SDK',
          url: 'https://github.com/OffchainLabs/stylus-sdk-c',
          description: 'Write smart contracts in C/C++'
        },
        {
          name: 'AssemblyScript SDK',
          url: 'https://as-stylus.wakeuplabs.io',
          description: 'Write contracts in TypeScript-like AssemblyScript'
        },
        {
          name: 'OpenZeppelin Contracts for Stylus',
          url: 'https://github.com/OpenZeppelin/rust-contracts-stylus',
          description: 'Audited ERC-20, ERC-721, access control & more'
        },
        {
          name: 'bobcat-sdk',
          url: 'https://github.com/stylus-developers-guild/bobcat-sdk',
          description: '~3x smaller alternative SDK'
        }
      ]
    },
    {
      title: 'Documentation',
      resources: [
        {
          name: 'Rust SDK Docs',
          url: 'https://docs.rs/stylus-sdk/latest/stylus_sdk/',
          description: 'API reference for Rust SDK'
        },
        {
          name: 'CLI Guide',
          url: 'https://docs.arbitrum.io/stylus/using-cli',
          description: 'cargo-stylus CLI reference'
        }
      ]
    }
  ],
  build: [
    {
      title: 'Editors & IDEs',
      resources: [
        {
          name: 'Wizard IDE',
          url: 'https://thewizard.app',
          description: 'Full-featured browser IDE for Stylus'
        },
        {
          name: 'Remix IDE Stylus Plugin',
          url: 'https://github.com/dsrvlabs/arbitrum-stylus',
          description: 'Compile & deploy in Remix — zero setup'
        }
      ]
    },
    {
      title: 'CLI & Testing Tools',
      resources: [
        {
          name: 'cargo-stylus',
          url: 'https://crates.io/crates/cargo-stylus',
          description: 'CLI tool for Stylus development'
        },
        {
          name: 'ArbOS-Foundry (Iosiro)',
          url: 'https://github.com/iosiro/arbos-foundry',
          description: 'Foundry fork with native Stylus + ArbOS support'
        },
        {
          name: 'Walnut: Stylus DB',
          url: 'https://github.com/walnuthq/stylusdb',
          description: 'Source-level debugger & call tracer'
        },
        {
          name: 'Skribe / StylusFuzz',
          url: 'https://kframework.org',
          description: 'Property-based fuzzing for WASM bytecode'
        }
      ]
    },
    {
      title: 'AI-Assisted Development',
      resources: [
        {
          name: 'OpenZeppelin MCP',
          url: 'https://mcp.openzeppelin.com/',
          description: 'Build OZ contracts in AI assistants'
        },
        {
          name: 'Claude Code Skill',
          url: 'https://github.com/hummusonrails/arbitrum-dapp-skill',
          description: 'AI context for Stylus + Solidity workflow'
        },
        {
          name: 'StylusPort MCP',
          url: 'https://github.com/oak-security/stylusport/tree/main/mcp',
          description: 'AI-assisted Solana → Stylus migration'
        }
      ]
    },
    {
      title: 'Templates & Infrastructure',
      resources: [
        {
          name: 'Stylus Hello World',
          url: 'https://github.com/OffchainLabs/stylus-hello-world',
          description: 'Starter template for Stylus'
        },
        {
          name: 'Stylus Rust Template',
          url: 'https://github.com/OffchainLabs/stylus-sdk-rs/tree/main/examples',
          description: 'Official Rust SDK examples'
        },
        {
          name: 'Cache Manager GUI',
          url: 'https://stylus.cobuilders.xyz/cache-status',
          description: 'Manage Stylus contract cache activation'
        },
        {
          name: 'thirdweb Stylus',
          url: 'https://thirdweb.com',
          description: 'Stylus contracts on thirdweb Explore'
        }
      ]
    }
  ],
  projects: [
    {
      title: 'DeFi',
      resources: [
        {
          name: '9lives.so',
          url: 'https://9lives.so',
          description: 'Prediction market built entirely with Stylus'
        },
        {
          name: 'Renegade',
          url: 'https://renegade.fi',
          description: 'On-chain dark pool with ZK privacy'
        },
        {
          name: 'Fairblock / DeBid',
          url: 'https://github.com/Fairblock/DeBid',
          description: 'Sealed-bid auctions for DeFi & RWA'
        }
      ]
    },
    {
      title: 'Oracles & Bridges',
      resources: [
        {
          name: 'RedStone Oracles',
          url: 'https://redstone.finance',
          description: 'Rust-based pull/push oracles'
        }
      ]
    },
    {
      title: 'Security & Verification',
      resources: [
        {
          name: 'Solang Stylus Target',
          url: 'https://github.com/trail-of-forks/solang',
          description: 'Solidity → WASM compiler by Trail of Bits'
        },
        {
          name: 'Skribe / StylusFuzz',
          url: 'https://kframework.org',
          description: 'WASM bytecode fuzzer by Runtime Verification'
        }
      ]
    },
    {
      title: 'Language Expansion',
      resources: [
        {
          name: 'AssemblyScript SDK',
          url: 'https://as-stylus.wakeuplabs.io',
          description: 'TypeScript-like contracts for Stylus'
        },
        {
          name: 'Moving Stylus (Move)',
          url: 'https://github.com/rather-labs',
          description: 'Move bytecode → WASM compiler'
        }
      ]
    }
  ]
};

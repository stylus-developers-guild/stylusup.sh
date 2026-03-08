import { useState } from 'react';
import { Play, CheckCircle } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

type Language = 'Rust' | 'C' | 'Zig';

const codeExamples = {
  Rust: {
    'Hello, World!': `// Stylus Hello World Contract
#![cfg_attr(not(feature = "export-abi"), no_main)]
extern crate alloc;

use stylus_sdk::prelude::*;

#[entrypoint]
pub fn main() -> Result<(), Vec<u8>> {
    // Your contract logic here
    Ok(())
}`,
    'Counter': `// Stylus Counter Contract
#![cfg_attr(not(feature = "export-abi"), no_main)]
extern crate alloc;

use stylus_sdk::prelude::*;
use stylus_sdk::storage::{StorageU256};

#[storage]
#[entrypoint]
pub struct Counter {
    count: StorageU256,
}

#[public]
impl Counter {
    pub fn increment(&mut self) {
        let count = self.count.get() + U256::from(1);
        self.count.set(count);
    }

    pub fn get(&self) -> U256 {
        self.count.get()
    }
}`,
    'ERC20 Token': `// Stylus ERC20 Token
#![cfg_attr(not(feature = "export-abi"), no_main)]
extern crate alloc;

use stylus_sdk::prelude::*;
use stylus_sdk::storage::StorageU256;
use stylus_sdk::evm;

#[storage]
#[entrypoint]
pub struct Token {
    total_supply: StorageU256,
    balances: Mapping<Address, StorageU256>,
}

#[public]
impl Token {
    pub fn transfer(&mut self, to: Address, amount: U256) -> bool {
        // Transfer logic
        true
    }
}`,
  },
};

export function CodeEditor() {
  const [selectedLang, setSelectedLang] = useState<Language>('Rust');
  const [selectedExample, setSelectedExample] = useState<string>('Hello, World!');
  const [code, setCode] = useState(codeExamples.Rust['Hello, World!']);
  const [runStatus, setRunStatus] = useState<'idle' | 'running' | 'success'>('idle');
  const [output, setOutput] = useState('');

  const handleLanguageChange = (lang: Language) => {
    setSelectedLang(lang);
    const firstExample = Object.keys(codeExamples[lang])[0];
    setSelectedExample(firstExample);
    setCode(codeExamples[lang][firstExample as keyof typeof codeExamples[typeof lang]]);
    setRunStatus('idle');
    setOutput('');
  };

  const handleExampleChange = (example: string) => {
    setSelectedExample(example);
    setCode(codeExamples[selectedLang][example as keyof typeof codeExamples[typeof selectedLang]]);
    setRunStatus('idle');
    setOutput('');
  };

  const runCode = async () => {
    setRunStatus('running');
    setOutput('Running...');

    // Simulate execution
    await new Promise(resolve => setTimeout(resolve, 1000));

    setRunStatus('success');
    setOutput(`Hello, 世界

Program exited.`);
  };

  const handleWizard = () => {
    // Navigate to Stylus Wizard/Playground
    window.open('https://thewizard.app', '_blank');
  };

  const availableExamples = Object.keys(codeExamples[selectedLang]);

  return (
    <div className="w-full">
      <div className="bg-[#263238] rounded-lg overflow-hidden border border-gray-700 shadow-xl">
        {/* Language tabs at the top */}
        <div className="bg-[#1E2326] px-4 py-3 border-b border-gray-700">
          <div className="flex gap-2">
            {(Object.keys(codeExamples) as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`px-4 py-2 text-sm rounded-md transition-all font-medium ${selectedLang === lang
                  ? 'bg-[#00ADD8] text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Code editor area */}
        <div className="relative">
          <div className="absolute top-3 left-3 text-xs text-gray-500 z-10">
            Press Esc to move out of the editor.
          </div>
          <div className="absolute top-3 left-3 text-xs text-gray-400 z-10 mt-4">
            // You can edit this code!
          </div>
          <div className="absolute top-3 left-3 text-xs text-gray-400 z-10 mt-6">
            // Click here and start typing.
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-[300px] bg-[#263238] text-gray-100 p-6 pt-16 font-mono text-sm leading-relaxed resize-none focus:outline-none"
            spellCheck={false}
          />
        </div>

        {/* Output section */}
        {output && (
          <div className="border-t border-gray-700 bg-[#263238]">
            <div className="p-4 font-mono text-sm text-gray-300 whitespace-pre-wrap">
              {output}
            </div>
          </div>
        )}

        {/* Controls bar with dropdown and buttons */}
        <div className="bg-[#1E2326] border-t border-gray-700 px-4 py-3 flex items-center justify-between">
          <Select value={selectedExample} onValueChange={handleExampleChange}>
            <SelectTrigger className="w-[200px] bg-[#263238] border-gray-600 text-gray-200 hover:bg-[#2E3738]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {availableExamples.map((example) => (
                <SelectItem key={example} value={example}>
                  {example}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex items-center gap-3">
            <button
              onClick={runCode}
              disabled={true}
              className="flex items-center gap-2 px-4 py-2 bg-[#00ADD8] text-white rounded-md text-sm font-medium opacity-50 cursor-not-allowed"
            >
              {runStatus === 'running' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Running...
                </>
              ) : runStatus === 'success' ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Run
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  Run
                </>
              )}
            </button>
            <button
              onClick={handleWizard}
              className="px-4 py-2 bg-transparent hover:bg-gray-700 text-gray-300 border border-gray-600 rounded-md text-sm font-medium transition-colors"
            >
              Wizard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
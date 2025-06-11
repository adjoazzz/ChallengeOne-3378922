class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
    this.output = []; 
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) { 
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
    this.output.push(null); 
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        this.output.push(false);
        return false;
      }
      node = node.children[char];
    }
    this.output.push(node.isEndOfWord);
    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        this.output.push(false);
        return false;
      }
      node = node.children[char];
    }
    this.output.push(true);
    return true;
  }
}
const trie = new Trie();

trie.insert("apple");         
trie.search("apple");         
trie.search("app");          
trie.startsWith("app");       
trie.insert("app");           
trie.search("app");           

console.log(trie.output);     //  [null, true, false, true, null, true]

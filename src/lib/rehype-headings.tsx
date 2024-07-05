

import { visit } from "unist-util-visit";

export default function rehypeHeadings() {
  return function (tree) {
    visit(tree, 'element', function (node) {
    
    })
  }
}
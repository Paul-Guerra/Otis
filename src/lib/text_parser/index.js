import { pattern as urlPattern, name as urlTokenName } from './tokens/url';
import { pattern as newlinePattern, name as newlineTokenName } from './tokens/newline';
import tableTokenizer from './tokens/types/table';
import lex from './lexer/';
import literalTokenizer from './tokens/types/literal';
import keywordTokenizer from './tokens/types/keyword';
import textRangeTokenizer from './tokens/types/text_range';
import blockTokenizer from './tokens/types/block';

export function tokenize(text) {
  let tokens = lex(
    text,
    [
      blockTokenizer({ open: '*', close: '*' }, 'BOLD'),
      blockTokenizer({ open: '_', close: '_' }, 'UNDERLINE'),
      blockTokenizer({ open: '-', close: '-' }, 'STRIKETHROUGH'),
      tableTokenizer('\t', 100),
      textRangeTokenizer(urlPattern, urlTokenName, 50),
      // keywordTokenizer('/buzz', 'BUZZ'),
      textRangeTokenizer('google.com', 'HIGHLIGHT', 20),
      textRangeTokenizer('Step 1', 'HIGHLIGHT', 25)
    ]
  );
  // let tokens = lex(text, [tableTokenizer('\t')]);
}

export function parse(text) {
  // console.log(text);
  return tokenize(text);
}

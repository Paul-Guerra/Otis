const oneRow = 'Step 1	foo bar baz	lorem ipsum';
const oneColumn = 'Step 1	';
const twoColumn = 'Step 1	foo bar baz';

const normal  = `Step 1	foo bar baz	lorem ipsum
Step 2	foo2 bar2 baz2	lorem2 ipsum2
Step 3	foo3 bar3 baz3	lorem3 ipsum3
`;

const markUp  = `Step 1	*foo bar baz*	lorem ipsum
Step 2	foo2 bar2 baz2	lorem2 *ips*um2
*Step 3*	foo3 bar3 baz3	lorem3 ipsum3
`;

const markUpBetweenCells  = `Step 1	foo bar baz	lorem ipsum
Step 2	foo2 *bar2 baz2	lorem2 ipsum2*
Step 3	foo3 bar3 baz3	lorem3 ipsum3
`;

const overlappingMarkUpInCell  = `Step 1	foo bar baz	lorem ipsum
Step 2	*foo2 _bar2* baz2_	lorem2 ipsum2
Step 3	foo3 bar3 baz3	lorem3 ipsum3
`;


const overlappingMarkUpBetweenCells  = `Step 1	foo bar baz	lorem ipsum
Step 2	*foo2 bar2 _baz2	lorem2* ipsum2_
Step 3	foo3 bar3 baz3	lorem3 ipsum3
`;

export default {
  normal,
  oneRow,
  oneColumn,
  twoColumn,
  markUp,
  markUpBetweenCells,
  overlappingMarkUpInCell,
  overlappingMarkUpBetweenCells
};
# Codex Development Guide

Codex must work incrementally and directly in the current repository.

For every milestone:

1. state the goal;
2. list affected files;
3. implement complete code;
4. run migrations where needed;
5. run lint;
6. run type-check;
7. run tests;
8. run production build;
9. fix all failures;
10. update documentation;
11. summarize completed work and known limitations.

Do not proceed to the next milestone until all acceptance criteria pass.

Do not leave pseudocode, empty functions or TODO placeholders for required milestone functionality.

When an external service is unavailable, create a working local adapter or explicit mock without misrepresenting it as production integration.

The application layer is responsible for driving the workflow of the application, matching the use cases at hand. These operatios are interface-independent and can be both synchronous or message-driven. This layer is well suited for spanning transactions, high-level logging and security.

The application layer is thin in terms of domain logic - it merely coordinates the domain layer objects to perform the actual work.

# TODO

- [ ] Tests for TheMovieDb application
- [ ] Refactoring TheMovieDb DataMappers after Domain refactoring
- [ ] Refactoring TheMovieDb/Service/Routes class
- [ ] ...
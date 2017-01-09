## Component Hierarchy

**AuthFormContainer**
- Authform

**HomeContainer**
- Home
- LoggedOutHeader

DashBoardContainer
- Header
- DashBoard

SearchResultContainer
- Header
- SearchResult
 + HostListings
 + GoogleMaps

HostContainer
- Header
- Host

## Routes

|Path   | Component   |
|-------|-------------|
| "/home" | "HomeContainer" |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/dashboard" | "DashBoardContainer" |
| "/dashboard/search-results" | "SearchResultContainer" |
| "/dashboard/host/:id" | "HostContainer" |

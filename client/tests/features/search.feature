Feature: Search in Google

	Scenario: Search from main page
		Given I`ve got opened page 'https://google.com/'
		When I text 'Hello world' to search input
		Then I should be redirected to 'https://google.com/search'
# Surfcraft_Market_Analysis
data files and code for coastal retailers and population metrics


## Part 1: Analysis of coastal US counties, population, and income
<br>American Community Survey 5-year: ACS5
<br>https://www.census.gov/data/developers/data-sets/acs-5year.html
<br>https://api.census.gov/data/2023/acs/acs5/variables.html

<br>bring in MIT cost of living scraped data to compare median or reported income with county cost of living? - calculate population with X amount of disposable income
<br> there may already be disposable income data in the census datasets



## Part2: Map of existing retailers in select counties
<br>Focus on coastal counties with: 
<br>relatively high income
<br>large populations
<br>swimmable beaches

<br> search for businesses by type ex."surf shop" and copy paste text into file for that county, city, etc
<br> link to these text files
<br> code for parsing the text and exporting to working directory

### googlemaps module and Places API key
<br> get major business addresses and location data, ex. "Target, *, FL"
<br> get location data for businesses from google search results


<br>put all places together in one dataset with a field/property that labels the business type: large retailer, surf shop, gift shop, sporting good store, marine and fishing supply

## Steps
census.gov data + mit cost of living for Florida coastal counties
<br> -median income - cost of living = disposable income
<br> -population density
analyze market by county, select 4 counties in Florida and more along east coast
buisiness names google search + placesAPI location data for buisinesses and large retailers


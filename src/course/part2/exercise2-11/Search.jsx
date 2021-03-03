const Search=({searchcountry,handleSearch})=>
            <div>
                find countries:<input type='text' value={searchcountry} onChange={handleSearch}/>
            </div>

export default Search
export default function Promote(){
    return(
        <div>
            <div className="mx-auto max-w-lg text-center">
                <div className="">
                    <p>what do you like to promote</p>
                    <select className="px-10" required>
                        <option>House</option>
                        <option>Appartment</option>
                        <option>Real Estate</option>
                        <option>Organization</option>
                        <option>Others</option>
                    </select>

                    <div className="py-10">    
                        <input type="file" id="image" className="hidden" required/>
                        <label className="py-2 px-20 bg-gray-100 cursor-pointer" htmlFor="image">Upload Image Here</label>
                    </div>

                    <div>
                        <p className="text-left px-28">Advertisment Title</p>
                        <input className="border-2 px-14" required/>
                    </div>
                    <div className="py-5">
                        <p className="text-left px-28">Description</p>
                        <textarea className="border-2 px-14" required/>
                    </div>

                    <div>
                        <p className="text-left px-28">Website Link (optional)</p>
                        <input type="url" className="border-2 px-14"/>
                    </div>

                    <div className="py-5">
                        <p className="text-left px-28">Phone Or Adress (required)</p>
                        <input type="" className="border-2 px-14" required/>
                    </div>

                    <div>
                        <button className="bg-green-500 px-16 py-3 rounded-3xl text-white">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
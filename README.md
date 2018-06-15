# CADGallery



CADGallery is a place for engineers to show off and discuss their 3D design portfolios. Seed content and styling are taken from Autodesk Gallery. Engineers and Architects can upload their projects and ask fellow designers questions about their projects. When supported CAD files are uploaded, users can manipulate them in 3D right in the browser. 



https://cadgallery.herokuapp.com/#/

<iframe src="https://giphy.com/embed/i34276WfpbJQ8HFiO1" width="480" height="290" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/clone-autodesk-i34276WfpbJQ8HFiO1"></a></p>

CADGallery was built using Postgress to manage the database. Ruby on Rails is used interact with the database and handle data requests from the front end. The fontend is handled with React along with Redux to manage the server requests and display data. 

One challenge I encountered was handling the creation of projects. Users can upload images of their projects, and while they are uploading them, previews of those images are displayed. When projects are submitted, two database tables are changed. If the last picture fails a model level validation, the user needs to be given a chance to fix their projects. The metadata for the previously added pictures must be destroyed along with the project entry.



To handle the preview thumnail, they must be immediately stored in the cloud service Cloudinary
1.Understanding CSS

Search and Replace
You can also think about CSS as a search and replace tool: you identify a class or a tag of the element you want to find (or match, in CSS terminology), 
and then what you want to do with it, or what property values to replace with different ones.

Order Matters
It also matters where you define the rules and in what order they are applied.
Styles can be defined in different places and are applied in the following order, 
with definitions further down the list overwriting previous definitions:

the default style of a browser (different browsers have slightly different styles)
stylesheet in a separate file (this is what you will be mostly using)
stylesheet inside HTML (this can be done for small projects but is not ideal)
inline style in an element (this can also be done but should be avoided)
Specifics Matter
"Cascading" means that rules are applied not only to the elements they directly match, 
but also to all of those elements' child elements. 
However, if a child element has multiple, overlapping rules defined for it,
the more specific rule takes effect.


2. Flexible box (flex box) layout 
Several elements next to eachother change parent display to flex

Using previous html work naming <div class="app"> </div>
in CSS call upon the class name. 

.app {
     display: -webkit-flex;
    display: flex;
}

Have to give them a size smaller than 100%. 
Add webkit to ensure older browsers can see.


3. Code, Test, Refine
Write code, 
test against design mockup 
then make refinements to ensure it looks close enough to the design. 

Need structure done by visually box
then text , does it need heading. 
boxes size and where to position them? 
Then minor details to look good later. 

'divide and conquer!'
semantics e.g. h2 second largest headings. 
html 
then styles 
biggest site wide then smallest e.g. widgets. 
resize window etc. 

4. Comparing with mockup 

Check not just on visuals but also margin spacing and padding between boxes etc.
FOnts, colours etc. 
Mockup image difference? 
Can edit and refine in dev tools then save for css. 
Often colours are provided in design models but also other colour pixels can be changed.


5. Validate html and css

http://validator.w3.org/#validate_by_input
http://jigsaw.w3.org/css-validator/#validate_by_input




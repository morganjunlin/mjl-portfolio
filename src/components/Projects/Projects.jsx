import React from 'react';

const Projects = (props) => (
  <div style={style}>
    <p style={title}>
      Previous Work
    </p>

    {/* do some kind of grid here for 3 projects */}

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia ornare fringilla. Vivamus ullamcorper laoreet nisi sit amet convallis. Mauris odio turpis, sollicitudin ut lacus a, dignissim imperdiet enim. Aenean gravida, ipsum non pretium suscipit, massa mi bibendum est, ac euismod ipsum urna ac erat. Maecenas quis iaculis dui, nec aliquet enim. In ut nunc ipsum. Nunc vel sagittis metus, sed placerat mauris. Aliquam egestas dignissim ipsum. Suspendisse scelerisque risus ac neque hendrerit, accumsan elementum ipsum auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur dui nisi, scelerisque a bibendum eget, varius sed velit. Vivamus risus ligula, fringilla non massa ac, tincidunt imperdiet lectus. Duis ut nisi turpis.
    </p>

    <p>
      Suspendisse non interdum nibh. Pellentesque sodales felis ac lectus feugiat, ut lacinia orci vehicula. Sed posuere sit amet risus nec sollicitudin. Nullam commodo sapien sit amet tellus suscipit rutrum. Donec ac justo in metus congue semper. Ut auctor, tortor at molestie dictum, purus tellus laoreet turpis, ullamcorper fermentum arcu justo non odio. Nam ut eros a arcu vehicula pharetra ac a sapien. In hac habitasse platea dictumst. Aliquam varius blandit consectetur. Sed purus nibh, semper id tincidunt eget, lobortis vitae neque. Maecenas sollicitudin orci commodo dolor suscipit, at malesuada ligula facilisis. Ut massa mi, dapibus rutrum tortor eu, tristique tristique nulla.
    </p>

    <p>
      In hac habitasse platea dictumst. Quisque ut fermentum erat. In ut gravida lacus. Nam ac tempor turpis. Ut facilisis sit amet justo fringilla rutrum. Nam vehicula ullamcorper nisl, ac interdum justo dictum ac. In sodales neque lectus, sed maximus nisi consequat a. Donec accumsan mattis mauris mollis posuere. Aenean commodo luctus sapien eu fermentum. Vestibulum id felis dictum, lacinia magna a, euismod turpis. In hac habitasse platea dictumst. Donec sollicitudin sollicitudin mauris, sit amet pretium lorem tristique et. Interdum et malesuada fames ac ante ipsum primis in faucibus.
    </p>
  </div>
)

const style = {
  padding: '64px 512px',
  fontFamily: 'Avenir'
}

const title = {
  textAlign: 'center',
  fontWeight: 'bold'
}

export default Projects;
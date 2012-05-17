// Generated by CoffeeScript 1.3.1
(function() {

  test('test_interactive', function() {
    var container, data_source1, data_source2, plot1, plot2, plot3, plot4;
    expect(0);
    data_source1 = Bokeh.Collections['ObjectArrayDataSource'].create({
      data: [
        {
          x: 1,
          y: -2
        }, {
          x: 2,
          y: -3
        }, {
          x: 3,
          y: -4
        }, {
          x: 4,
          y: -5
        }, {
          x: 5,
          y: -6
        }
      ]
    });
    data_source2 = Bokeh.Collections['ObjectArrayDataSource'].create({
      data: [
        {
          x: 1,
          y: 2
        }, {
          x: 2,
          y: 3
        }, {
          x: 3,
          y: 1
        }, {
          x: 4,
          y: 5
        }, {
          x: 5,
          y: 6
        }
      ]
    });
    container = Bokeh.Collections['InteractiveContext'].create();
    plot1 = Bokeh.scatter_plot(container, data_source1, 'x', 'y', 'x', 'circle');
    plot2 = Bokeh.scatter_plot(container, data_source2, 'x', 'y', 'x', 'circle');
    plot3 = Bokeh.scatter_plot(container, data_source2, 'x', 'y', 'x', 'circle');
    plot4 = Bokeh.line_plot(container, data_source1, 'x', 'y');
    container.set({
      'children': [plot1.ref(), plot2.ref(), plot3.ref(), plot4.ref()]
    });
    plot1.set('offset', [100, 100]);
    plot2.set('offset', [400, 100]);
    plot3.set('offset', [100, 300]);
    plot4.set('offset', [500, 300]);
    window.myrender = function() {
      var view;
      view = new container.default_view({
        'model': container
      });
      view.render();
      plot3.set({
        'height': 300
      });
      return window.plot3 = plot3;
    };
    return _.defer(window.myrender);
  });

}).call(this);
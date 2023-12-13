const React = require('react');
const ReactDomServer = require('react-dom/server');

function renderComponent(component, props, { doctype } = { doctype: true }) {
  const reactComponent = React.createElement(component, {
    ...props,
    // ещё в компонент передаем в качестве пропсов все,
    // что лежит в res.locals (например, res.locals.user)
    ...this.locals,
    // также передаем все, что лежит в app.locals
    ...this.app.locals,
  });
  const html = ReactDomServer.renderToStaticMarkup(reactComponent);
  return doctype ? `<DOCTYPE html>${html}` : html;
}

module.exports = function ssr(req, res, next) {
  res.renderComponent = renderComponent;
  next();
};

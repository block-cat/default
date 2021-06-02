import DefaultSettingsPage from './components/DefaultSettingsPage';

app.initializers.add('block-cat/default', () => {
  app.extensionData.for('block-cat-default')
    .registerPage(DefaultSettingsPage);
});

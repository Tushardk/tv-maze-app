import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';
import Header from '@/components/AppHeader.vue';

describe('Testing HomeView.vue wrapper component', () => {
  const shallowWrapper = shallowMount(App, {
    stubs: ['router-view'],
  });
  it('App.vue should be rendered correctly', () => {
    expect(shallowWrapper.element).toMatchSnapshot();
  });

  it('child component PbdbMasterLayout should be present', () => {
    expect(shallowWrapper.findComponent(Header).exists()).toBe(true);
  });
});

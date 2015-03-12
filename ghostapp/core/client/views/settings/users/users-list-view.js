import PaginationViewMixin from 'ghost/mixins/pagination-view-infinite-scroll';

var UsersListView = Ember.View.extend(PaginationViewMixin, {
    classNames: ['settings-users']
});

export default UsersListView;

<script setup lang="ts">
const props = defineProps(['showDetails']);
</script>

<template>
  <div v-html="showDetails?.summary" class="mb-2"></div>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden rounded-lg">
          <table class="min-w-full">
            <tbody>
              <tr class="bg-white border-b">
                <td
                  class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap"
                >
                  Stars
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap"
                >
                  {{ showDetails?.rating.average }}
                </td>
              </tr>

              <tr class="bg-white border-b">
                <td
                  class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap"
                >
                  Runtime
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap"
                >
                  {{ showDetails?.runtime }}
                </td>
              </tr>

              <tr class="bg-white border-b">
                <td
                  class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap"
                >
                  Status
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap"
                >
                  {{ showDetails?.status }}
                </td>
              </tr>

              <tr class="bg-white border-b">
                <td
                  class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap"
                >
                  Average Runtime
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap"
                >
                  {{ showDetails?.averageRuntime }}
                </td>
              </tr>

              <tr class="bg-white border-b">
                <td
                  class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap"
                >
                  Premiered
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap"
                >
                  {{ showDetails?.premiered }}
                </td>
              </tr>

              <tr class="bg-white border-b">
                <td
                  class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap"
                >
                  Ended
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap"
                >
                  {{ showDetails?.ended }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

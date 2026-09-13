import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Href, router  } from 'expo-router'

const actions = [
  {
    title: 'Add Expense',
    icon: 'add',
    color: 'bg-green-500',
    link: '/addexpense'  as Href
  },
  {
    title: 'Add Income',
    icon: 'swap-horizontal',
    color: 'bg-blue-500',
    link: '/addincome' as Href
  },
  {
    title: 'View Reports',
    icon: 'pie-chart',
    color: 'bg-purple-500',
    link: '/(tabs)/reports'as Href
  },
  {
    title: 'Manage Categories',
    icon: 'grid',
    color: 'bg-orange-500',
    link: '/categories' as Href
  },
]
const transactions = [
  {
    id: 1,
    title: 'Zomato',
    category: 'Food & Drinks',
    date: '12 Sep 2025',
    amount: '-₹350',
    type: 'expense',
    icon: 'restaurant',
    color: 'bg-red-600',
  },
  {
    id: 2,
    title: 'Salary',
    category: 'Income',
    date: '10 Sep 2025',
    amount: '+₹40,000',
    type: 'income',
    icon: 'wallet',
    color: 'bg-green-600',
  },
  {
    id: 3,
    title: 'Amazon',
    category: 'Shopping',
    date: '8 Sep 2025',
    amount: '-₹1,200',
    type: 'expense',
    icon: 'cart',
    color: 'bg-indigo-500',
  },
  {
    id: 4,
    title: 'Fuel',
    category: 'Transportation',
    date: '6 Sep 2025',
    amount: '-₹500',
    type: 'expense',
    icon: 'car',
    color: 'bg-orange-500',
  },
  {
    id: 5,
    title: 'Freelance',
    category: 'Income',
    date: '4 Sep 2025',
    amount: '+₹15,000',
    type: 'income',
    icon: 'cash',
    color: 'bg-green-600',
  },
  {
    id: 6,
    title: 'Netflix',
    category: 'Entertainment',
    date: '2 Sep 2025',
    amount: '-₹649',
    type: 'expense',
    icon: 'play',
    color: 'bg-red-500',
  },
  {
    id: 7,
    title: 'Electricity Bill',
    category: 'Utilities',
    date: '1 Sep 2025',
    amount: '-₹2,500',
    type: 'expense',
    icon: 'flash',
    color: 'bg-yellow-500',
  },
]

export default function index() {
    return (
  <View className="flex-1 bg-black">
    <SafeAreaView className="flex-1">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 40 }}
      >

        {/* Header */}
        <View className="mt-4">
          <Text className="text-gray-400 text-base">
            Good Morning
          </Text>

          <Text className="text-white text-4xl font-bold mt-1">
            Rishabh
          </Text>

          <Text className="text-gray-400 text-base mt-2">
            Track your expenses, build a better tomorrow.
          </Text>
        </View>


        {/* Total Balance */}
        <View className="border border-gray-800 rounded-3xl p-5 mt-7 bg-[#07100d]">

          <Text className="text-gray-400 text-base">
            Total Balance
          </Text>

          <Text className="text-white text-4xl font-bold mt-2">
            ₹25,000.00
          </Text>

          <View className="flex-row items-center mt-5">

            <View className="h-9 w-9 rounded-full bg-green-500 items-center justify-center">
              <Text className="text-black text-xl font-bold">
                ↑
              </Text>
            </View>

            <Text className="text-green-400 text-base ml-3 font-semibold">
              +12%
            </Text>

            <Text className="text-gray-400 text-base ml-2">
              from last month
            </Text>

          </View>

        </View>


        {/* Income + Expense */}
        <View className="flex-row justify-between mt-4">

          {/* Income */}
          <View className="w-[48%] border border-gray-800 rounded-2xl p-4">

            <Text className="text-gray-400 text-sm">
              Total Income
            </Text>

            <Text className="text-white text-2xl font-bold mt-2">
              ₹40,000
            </Text>

            <View className="flex-row items-center mt-4">

              <View className="h-8 w-8 rounded-full bg-green-500 items-center justify-center">
                <Text className="text-black font-bold">
                  ↑
                </Text>
              </View>

              <Text className="text-green-400 ml-2 font-semibold">
                +12%
              </Text>

            </View>

          </View>


          {/* Expense */}
          <View className="w-[48%] border border-gray-800 rounded-2xl p-4">

            <Text className="text-gray-400 text-sm">
              Total Expense
            </Text>

            <Text className="text-white text-2xl font-bold mt-2">
              ₹15,000
            </Text>

            <View className="flex-row items-center mt-4">

              <View className="h-8 w-8 rounded-full bg-red-500 items-center justify-center">
                <Text className="text-black font-bold">
                  ↓
                </Text>
              </View>

              <Text className="text-red-400 ml-2 font-semibold">
                -8%
              </Text>

            </View>

          </View>

        </View>


        {/* Quick Actions */}
        <View className="mt-8">

          <View className="flex-row justify-between items-center mb-4">

            <Text className="text-white text-2xl font-bold">
              Quick Actions
            </Text>

            <Pressable>
              <Text className="text-green-500 text-base font-medium">
                See All
              </Text>
            </Pressable>

          </View>


          <View className="flex-row justify-between">

            {actions.map((item) => (

              <Pressable onPress={()=>(router.push(item.link))}
                key={item.title}
                className="h-40 w-[23%] rounded-2xl border border-gray-800 items-center justify-center"
              >

                <View
                  className={`h-14 w-14 rounded-full ${item.color} items-center justify-center`}
                >

                  <Text className="text-white text-3xl">
                    {item.icon === "add" && "+"}
                    {item.icon === "swap-horizontal" && "↔"}
                    {item.icon === "pie-chart" && "◕"}
                    {item.icon === "grid" && "▦"}
                  </Text>

                </View>

                <Text className="text-white text-center mt-4 text-sm">
                  {item.title}
                </Text>

              </Pressable>

            ))}

          </View>

        </View>


        {/* Recent Transactions */}
        <View className="mt-8">

          <View className="flex-row justify-between items-center mb-4">

            <Text className="text-white text-2xl font-bold">
              Recent Transactions
            </Text>

            <Pressable>
              <Text className="text-green-500 text-base font-medium">
                See All
              </Text>
            </Pressable>

          </View>


          <View className="border border-gray-800 rounded-3xl overflow-hidden">

            {transactions.map((item, index) => (

              <View
                key={item.id}
                className={`flex-row items-center px-4 py-5 ${
                  index !== transactions.length - 1
                    ? "border-b border-gray-800"
                    : ""
                }`}
              >

                {/* Icon */}
                <View
                  className={`h-14 w-14 rounded-full ${item.color} items-center justify-center`}
                >
                  <Text className="text-white text-2xl">
                    {item.icon === "restaurant" && "🍴"}
                    {item.icon === "wallet" && "💼"}
                    {item.icon === "cart" && "🛒"}
                    {item.icon === "car" && "⛽"}
                    {item.icon === "cash" && "💵"}
                    {item.icon === "play" && "▶"}
                    {item.icon === "flash" && "⚡"}
                  </Text>
                </View>


                {/* Name + Category */}
                <View className="flex-1 ml-4">

                  <Text className="text-white text-lg font-semibold">
                    {item.title}
                  </Text>

                  <Text className="text-gray-400 text-sm mt-1">
                    {item.category}
                  </Text>

                </View>


                {/* Date + Amount */}
                <View className="items-end">

                  <Text className="text-gray-400 text-xs">
                    {item.date}
                  </Text>

                  <Text
                    className={`text-base font-bold mt-2 ${
                      item.type === "income"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {item.amount}
                  </Text>

                </View>

              </View>

            ))}

          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  </View>
)}
